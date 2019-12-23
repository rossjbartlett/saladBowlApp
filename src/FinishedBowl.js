import React, { Component } from 'react'
import { Button, View, Text, TextInput, StyleSheet, Vibration } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import Dialog from "react-native-dialog"
import CountdownCircle from 'react-native-countdown-circle'
import Card from './Card'
import { connect } from 'react-redux'
import { setCardsInBowl } from './redux'
import { bindActionCreators } from 'redux'
import header from './Header'
import SaladImg from './SaladImg'

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
  return (
    <View style={styles.container}>
      <SaladImg />
      <Text style={styles.text}>You finished the bowl!</Text>
      <View style={styles.button}>
        <Button
          title="Start Next Round"
          onPress={() => {
            console.log("restting bowl:", props.cards)
            Vibration.vibrate()
            props.navigation.navigate('StartTurn', { cardsInBowl: props.cards }) // reset bowl
          }}
        />
      </View>
    </View>
  )
}

FinishedBowl.navigationOptions = header("Finished Bowl")

const mapStateToProps = (state) => {
  const { cards } = state
  return { cards }
}

export default connect(mapStateToProps)(FinishedBowl)
