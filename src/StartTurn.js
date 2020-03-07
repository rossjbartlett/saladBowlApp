import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, View, Text, TextInput, StyleSheet, Vibration, Image } from 'react-native'
import { createAppContainer, NavigationActions } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import CountdownCircle from 'react-native-countdown-circle'
import Card from './Card'
import Scoreboard from './Scoreboard'
import Header from './Header'
import SaladImg from './SaladImg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    marginBottom: "5%",
  },
  text: {
    fontSize: 24,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    flex: 3,
    marginTop: "5%",
    width: 200,
  },
})

const StartTurn = (props) => {
  const cardsInBowl = props.navigation.getParam('cardsInBowl', [])
  console.log("start turn: cards", cardsInBowl)
  return (
    <View style={styles.container}>
      <Scoreboard />
      <Text>Pass the device to the next
        <Text style={{ color: props.currentTeamColor }}> {props.currentTeam} </Text>
        player.
      </Text>
      <SaladImg />
      <Text style={styles.text}>Cards in Bowl: {cardsInBowl.length}</Text>
      <View style={styles.button}>
        <Button
          title="Start Turn"
          color={props.currentTeamColor}
          onPress={() => {
            Vibration.vibrate()
            props.navigation.navigate('Guessing', { cardsInBowl })
          }}
        />
      </View>
    </View >
  )
}

StartTurn.navigationOptions = Header("Next Turn")

const mapStateToProps = (state) => {
  const { currentTeam, currentTeamColor } = state
  return { currentTeam, currentTeamColor }
}

export default connect(mapStateToProps)(StartTurn)
