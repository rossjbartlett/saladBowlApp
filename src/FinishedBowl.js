import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Button, View, Text, Vibration } from 'react-native'
import { changeTeam, incrementRound } from './data'
import { BLUE } from './constants'
import Screens from './screens'
import SaladImg from './SaladImg'
import Scoreboard from './Scoreboard'
import RoundInfo from './RoundInfo'
import commonStyles from './styles'

const FinishedBowl = (props) => {
  const dispatch = useDispatch()

  return (
    <View style={commonStyles.container}>

      <Scoreboard />
      <Text style={commonStyles.text}>You finished the bowl!</Text>
      <SaladImg />
      <RoundInfo showNextRound />

      <View style={commonStyles.buttonContainer}>
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
