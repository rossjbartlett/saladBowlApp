import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet, Vibration } from 'react-native'
import CountdownCircle from 'react-native-countdown-circle'
import Card from './Card'
import { connect, useDispatch } from 'react-redux'
import { changeTeam, incrementScore, incrementRound } from './data'

import Header from './Header'
import FadeIn from './FadeIn'

const RED = '#e50000'
const DEFAULT_GRAY = '#999'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  text: {
    fontSize: 24,
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '5%',
    width: 200,
  },
  marginTop: {
    marginTop: '5%',
  },
  marginTop2: {
    marginTop: '2%',
  },
  red: {
    color: RED,
  }
})

const Guessing = (props) => {
  const seconds = 5 // TODO 60, make this configurable
  const propCardsInBowl = props.navigation.getParam('cardsInBowl', [])
  const [localCardsInBowl, setLocalCardsInBowl] = useState(propCardsInBowl)
  const [chosenCard, setChosenCard] = useState()
  const [timeUp, setTimeUp] = useState(false)
  const teamColor = props.currentTeamColor
  const lastRound = props.currentRound + 1 >= props.rounds.length
  console.log('last round:', lastRound) // TODO RM
  const dispatch = useDispatch()

  useEffect(() => {
    drawCard() // first draw
  }, [localCardsInBowl])

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * localCardsInBowl.length)
    const randomCard = localCardsInBowl[randomIndex]
    setChosenCard(randomCard)
    // setChosenIndex(randomIndex)
  }

  const guessSuccess = () => {
    // TODO sound ding
    // cardsInBowl.splice(chosenIndex, 1) // remove card from bowl
    const cardsLeftInBowl = localCardsInBowl.filter(x => x !== chosenCard) // TODO this will remove duplicates, use index?
    // setLocalCardsInBowl(newCardsInBowl)
    setLocalCardsInBowl(cardsLeftInBowl)
    dispatch(incrementScore())
    if (cardsLeftInBowl.length <= 0) {
      Vibration.vibrate()
      const nextScreen = lastRound ? 'FinishedLastBowl' : 'FinishedBowl'
      // TODO sometimes going to lastBowl too early?
      dispatch(incrementRound())
      props.navigation.replace(nextScreen)
    }
  }

  const handleTimeUp = () => {
    // TODO alarm sound
    Vibration.vibrate([300, 300, 300])
    setTimeUp(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cards Left: {localCardsInBowl.length}</Text>
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
          <Text style={[styles.text, styles.red]}>Time's Up!</Text>
        )}
      </View>

      <Card text={chosenCard} />

      <View style={styles.bottomButton}>
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
                props.navigation.replace('StartTurn', { cardsInBowl: localCardsInBowl })
              }}
            />
          </FadeIn>
        )}
      </View>
    </View>
  )
}

Guessing.navigationOptions = Header('Salad Bowl')

const mapStateToProps = (state) => {
  const { currentTeamColor, currentRound, rounds } = state
  return { currentTeamColor, currentRound, rounds }
}

export default connect(mapStateToProps)(Guessing)

// export default Guessing
