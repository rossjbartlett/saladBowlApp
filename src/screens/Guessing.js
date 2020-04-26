import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet, Vibration } from 'react-native'
import CountdownCircle from 'react-native-countdown-circle'
import { connect, useDispatch } from 'react-redux'
import { Audio } from 'expo-av'
import { changeTeam, incrementScore } from '../data'
import Screens from '../screens'
import FadeIn from '../components/FadeIn'
import Card from '../components/Card'
import commonStyles from '../styles'

const RED = '#e50000'
const DEFAULT_GRAY = '#999'

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  marginTop: {
    marginTop: '5%'
  },
  marginTop2: {
    marginTop: '2%'
  },
  red: {
    color: RED
  }
})

const Guessing = (props) => {
  const alarm = new Audio.Sound()
  alarm.loadAsync(require('../../assets/radar.mp3'))

  const seconds = 5 // TODO 60, make this configurable
  const propCardsInBowl = props.navigation.getParam('cardsInBowl', [])
  const [localCardsInBowl, setLocalCardsInBowl] = useState(propCardsInBowl)
  const [chosenCardIndex, setchosenCardIndex] = useState()
  const [timeUp, setTimeUp] = useState(false)
  const teamColor = props.currentTeamColor
  const lastRound = props.currentRound + 1 >= props.rounds.length
  const chosenCard = localCardsInBowl[chosenCardIndex]
  const dispatch = useDispatch()

  useEffect(() => {
    drawCard() // first draw
  }, [localCardsInBowl])

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * localCardsInBowl.length)
    setchosenCardIndex(randomIndex)
  }

  const handleFinishedBowl = () => {
    Vibration.vibrate()
    const nextScreen = lastRound ? Screens.FINSIHED_LAST_BOWL : Screens.FINISHED_BOWL
    props.navigation.replace(nextScreen)
  }

  const guessSuccess = () => {
    // TODO sound ding
    const cardsLeftInBowl = localCardsInBowl.filter((_, i) => i !== chosenCardIndex)
    setLocalCardsInBowl(cardsLeftInBowl)
    dispatch(incrementScore())
    if (cardsLeftInBowl.length <= 0) {
      handleFinishedBowl()
    }
  }

  const handleTimeUp = () => {
    // TODO alarm sound
    alarm.playAsync()
    Vibration.vibrate([300, 300, 300])
    setTimeUp(true)
  }

  return (
    <View style={commonStyles.container}>
      <Text style={[commonStyles.text, commonStyles.bold]}>Cards Left: {localCardsInBowl.length}</Text>
      <View style={styles.marginTop}>
        <CountdownCircle
          seconds={seconds}
          radius={100}
          borderWidth={6}
          color={timeUp ? DEFAULT_GRAY : teamColor}
          bgColor='white'
          textStyle={{ fontSize: 64, color: timeUp ? RED : teamColor }}
          onTimeElapsed={() => handleTimeUp()}
        />
      </View>
      <View style={styles.marginTop2} >
        {timeUp && (
          <Text style={[commonStyles.text, styles.red, commonStyles.bold]}>Time&apos;s Up!</Text>
        )}
      </View>

      <Card text={chosenCard} />

      <View style={[commonStyles.buttonContainer, styles.bottomButton]}>
        {!timeUp && (
          <Button
            title='Got it!'
            color={teamColor}
            onPress={() => {
              Vibration.vibrate([100, 100])
              guessSuccess()
            }}
          />
        )}
        {timeUp && (
          <FadeIn delay={750}>
            <Button
              title='Next Player'
              color={teamColor}
              onPress={() => {
                dispatch(changeTeam())
                Vibration.vibrate(200)
                props.navigation.replace(Screens.START_TURN, { cardsInBowl: localCardsInBowl })
              }}
            />
          </FadeIn>
        )}
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  const { currentTeamColor, currentRound, rounds } = state
  return { currentTeamColor, currentRound, rounds }
}

export default connect(mapStateToProps)(Guessing)
