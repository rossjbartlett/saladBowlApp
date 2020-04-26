import React from 'react'
import { connect } from 'react-redux'
import { Button, View, Text, Vibration } from 'react-native'
import SaladImg from './SaladImg'
import Screens from './screens'
import Scoreboard from './Scoreboard'
import RoundInfo from './RoundInfo'
import commonStyles from './styles'

const StartTurn = (props) => {
  const cardsInBowl = props.navigation.getParam('cardsInBowl', [])

  return (
    <View style={commonStyles.container}>
      <Scoreboard />
      <RoundInfo />
      <Text>
        Pass the device to the next
        <Text style={[commonStyles.bold, { color: props.currentTeamColor }]}> {props.currentTeam} </Text>
        player.
      </Text>
      <SaladImg />
      <Text style={commonStyles.text}>Cards in Bowl: {cardsInBowl.length}</Text>
      <View style={[{ flex: 3 }, commonStyles.buttonContainer]}>
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

const mapStateToProps = (state) => {
  const { currentTeam, currentTeamColor } = state
  return { currentTeam, currentTeamColor }
}

export default connect(mapStateToProps)(StartTurn)
