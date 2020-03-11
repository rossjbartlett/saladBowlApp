import React from 'react'
import { Button, View, Text, StyleSheet, Vibration } from 'react-native'
import Screens from './src/Screens'
import Header from './Header'
import SaladImg from './SaladImg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    justifyContent: 'center',
  },
  textSize: {
    fontSize: 24,
  },
  boldCentered: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: '5%',
    width: 200
  },
})

const FinishedLastBowl = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>You finished the bowl!</Text>

      <SaladImg />

      <Text style={[styles.boldCentered, styles.textSize]}>
        The Final Score is...
      </Text>

      <View style={styles.button}>
        <Button
          title='View Results'
          onPress={() => {
            Vibration.vibrate()
            props.navigation.navigate(Screens.GAME_OVER) // TODO replace() if need redux update?
          }}
        />
      </View>
    </View>
  )
}

FinishedLastBowl.navigationOptions = Header('Finished Bowl')

export default FinishedLastBowl
