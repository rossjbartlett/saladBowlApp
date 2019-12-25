import React from 'react'
import { Button, View, Text, TextInput, StyleSheet, Vibration } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import CountdownCircle from 'react-native-countdown-circle'
import Card from './Card'
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTeam } from './redux'
import header from './Header'
import { getCurrentTeamColor } from './Teams'
import FadeIn from './FadeIn'

const RED = "#e50000"
const DEFAULT_GRAY = "#999"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: "5%",
    marginBottom: "5%",
  },
  text: {
    fontSize: 24,
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: "5%",
    width: 200,
  },
  marginTop: {
    marginTop: "5%",
  },
  marginTop2: {
    marginTop: "2%",
  },
  red: {
    color: RED,
  }
})

const Guessing = (props) => {
  const seconds = 5 // TODO 60
  const propCardsInBowl = props.navigation.getParam('cardsInBowl', [])
  const [localCardsInBowl, setLocalCardsInBowl] = React.useState(propCardsInBowl)
  const [chosenCard, setChosenCard] = React.useState()
  const [timeUp, setTimeUp] = React.useState(false)
  const [pointsThisTurn, setPointsThisTurn] = React.useState(0)
  const dispatch = useDispatch()

  React.useEffect(() => {
    drawCard() // first draw
  }, [localCardsInBowl])

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * localCardsInBowl.length)
    const randomCard = localCardsInBowl[randomIndex]
    setChosenCard(randomCard)
    console.log("chosen card:", randomCard)
    // setChosenIndex(randomIndex)
  }

  const guessSuccess = () => {
    // cardsInBowl.splice(chosenIndex, 1) // remove card from bowl
    console.log("removed ", chosenCard)
    const newCardsInBowl = localCardsInBowl.filter(x => x !== chosenCard) // TODO this will remove duplicates, use index?
    // setLocalCardsInBowl(newCardsInBowl)
    setLocalCardsInBowl(newCardsInBowl)
    console.log("new cards in bowl: ", newCardsInBowl)
    setPointsThisTurn(pointsThisTurn + 1)
    if (newCardsInBowl.length <= 0) {
      console.log("finished bowl")
      Vibration.vibrate()
      props.navigation.navigate('FinishedBowl')
    }
    // drawCard()
    // TODO sound ding
  }

  const handleTimeUp = () => {
    // TODO alarm sound
    Vibration.vibrate([300, 300, 300])
    setTimeUp(true)
  }

  const teamColor = getCurrentTeamColor()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cards Left: {localCardsInBowl.length}</Text>
      <View style={styles.marginTop}>
        {/* TODO make this cancel when finish before time up */}
        <CountdownCircle
          seconds={seconds}
          radius={100}
          borderWidth={6}
          color={timeUp ? DEFAULT_GRAY : "#2fa7d9"}
          bgColor="white"
          textStyle={{ fontSize: 64, color: timeUp ? RED : "black" }}
          onTimeElapsed={() => handleTimeUp()}
        />
      </View>
      <View style={styles.marginTop2} >
        {timeUp && (
          <Text style={[styles.text, styles.red, styles.bold]}>Time's Up!</Text>
        )}
      </View>

      <Card text={chosenCard} />

      <View style={styles.bottomButton}>
        {!timeUp && (
          <Button
            title="Got it!"
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
              title="Next Player"
              color={teamColor}
              onPress={() => {
                console.log("next turn with bowl: ", localCardsInBowl)
                // console.log("current team:", props.currentTeam)
                dispatch(changeTeam())
                Vibration.vibrate(200)
                props.navigation.navigate('StartTurn', { cardsInBowl: localCardsInBowl })
              }}
            />
          </FadeIn>
        )}
      </View>
    </View>
  )
}

Guessing.navigationOptions = header("Salad Bowl")


// const mapStateToProps = (state) => {
//   const { currentTeam } = state
//   return { currentTeam }
// }

// export default connect(mapStateToProps)(Guessing)

export default Guessing
