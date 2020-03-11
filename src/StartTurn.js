import React from 'react'
import { connect } from 'react-redux'
import { Button, View, Text, StyleSheet, Vibration } from 'react-native'
import SaladImg from './SaladImg'
import Header from './Header'
import Screens from './Screens'
import Scoreboard from './Scoreboard'
import RoundInfo from './RoundInfo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  text: {
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    flex: 3,
    marginTop: '5%',
    width: 200,
  },
})

const StartTurn = (props) => {
  const cardsInBowl = props.navigation.getParam('cardsInBowl', [])

  return (
    <View style={styles.container}>
      <Scoreboard />
      <RoundInfo />
      <Text>
        Pass the device to the next
        <Text style={[styles.bold, { color: props.currentTeamColor }]}> {props.currentTeam} </Text>
        player.
      </Text>
      <SaladImg />
      <Text style={styles.text}>Cards in Bowl: {cardsInBowl.length}</Text>
      <View style={styles.button}>
        <Button
          title='Start Turn'
          color={props.currentTeamColor}
          onPress={() => {
            Vibration.vibrate()
            props.navigation.navigate(Screens.GUESSING, { cardsInBowl })
          }}
        />
      </View>
    </View >
  )
}

StartTurn.navigationOptions = Header('Next Turn')

const mapStateToProps = (state) => {
  const { currentTeam, currentTeamColor } = state
  return { currentTeam, currentTeamColor }
}

export default connect(mapStateToProps)(StartTurn)
