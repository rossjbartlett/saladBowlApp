import React from 'react'
import { Button, View, Text, TextInput, StyleSheet, Vibration, Image } from 'react-native'
import { createAppContainer, NavigationActions } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import CountdownCircle from 'react-native-countdown-circle'
import { bindActionCreators } from 'redux'
import Card from './Card'
import { connect } from 'react-redux'
import header from './Header'
import SaladImg from './SaladImg'
import { getCurrentTeamColor } from './Teams'

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
      <Text>Pass the device to the next {props.currentTeam} player.</Text>
      <SaladImg />
      <Text style={styles.text}>Cards in Bowl: {cardsInBowl.length}</Text>
      <View style={styles.button}>
        <Button
          title="Start Turn"
          color={getCurrentTeamColor()}
          onPress={() => {
            Vibration.vibrate()
            props.navigation.navigate('Guessing', { cardsInBowl })
          }}
          />
      </View>
    </View>
  )
}

StartTurn.navigationOptions = header("Next Turn")

const mapStateToProps = (state) => {
  const { currentTeam } = state
  return { currentTeam }
}

export default connect(mapStateToProps)(StartTurn)
