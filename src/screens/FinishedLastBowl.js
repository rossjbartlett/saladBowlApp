import React from 'react'
import { Button, View, Text, Vibration } from 'react-native'
import { BLUE } from '../constants'
import Screens from '../screens'
import SaladImg from '../components/SaladImg'
import commonStyles from '../styles'

const FinishedLastBowl = (props) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>You finished the bowl!</Text>

      <SaladImg />

      <Text style={[commonStyles.boldCentered, commonStyles.text]}>
        The Final Score is...
      </Text>

      <View style={commonStyles.buttonContainer}>
        <Button
          title='View Results'
          color={BLUE}
          onPress={() => {
            Vibration.vibrate()
            props.navigation.navigate(Screens.GAME_OVER)
          }}
        />
      </View>
    </View>
  )
}

export default FinishedLastBowl
