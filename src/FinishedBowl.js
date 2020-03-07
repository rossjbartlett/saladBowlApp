import React from 'react'
import { bindActionCreators } from 'redux'
import { connect, useDispatch } from 'react-redux'
import { Button, View, Text, TextInput, StyleSheet, Vibration } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import CountdownCircle from 'react-native-countdown-circle'
import Card from './Card'
import { changeTeam } from './redux'
import Header from './Header'
import SaladImg from './SaladImg'
import Scoreboard from './Scoreboard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: "5%",
    marginBottom: "5%",
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  button: {
    marginTop: "5%",
    width: 200
  },
})

const FinishedBowl = (props) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Scoreboard />
      <SaladImg />
      <Text style={styles.text}>You finished the bowl!</Text>
      <View style={styles.button}>
        <Button
          title="Start Next Round"
          onPress={() => {
            dispatch(changeTeam())
            Vibration.vibrate()
            props.navigation.replace('StartTurn', { cardsInBowl: props.cards }) // reset bowl
          }}
        />
      </View>
    </View>
  )
}

FinishedBowl.navigationOptions = Header("Finished Bowl")

const mapStateToProps = (state) => {
  const { cards } = state
  return { cards }
}

export default connect(mapStateToProps)(FinishedBowl)
