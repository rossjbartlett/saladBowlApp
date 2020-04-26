import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Button, View, Text, StyleSheet, Vibration } from 'react-native'
import { changeTeam, incrementRound } from './data'
import { BLUE } from './constants'
import Screens from './Screens'
import SaladImg from './SaladImg'
import Scoreboard from './Scoreboard'
import RoundInfo from './RoundInfo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24
  },
  button: {
    marginTop: '5%',
    width: 200
  }
})

const FinishedBowl = (props) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>

      <Scoreboard />
      <Text style={styles.text}>You finished the bowl!</Text>
      <SaladImg />
      <RoundInfo showNextRound />

      <View style={styles.button}>
        <Button
          title='Next Round'
          color={BLUE}
          onPress={() => {
            dispatch(changeTeam())
            dispatch(incrementRound())
            Vibration.vibrate()
            props.navigation.replace(Screens.START_TURN, { cardsInBowl: props.cards }) // reset bowl
          }}
        />
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  const { cards } = state
  return { cards }
}

export default connect(mapStateToProps)(FinishedBowl)
