import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import commonStyles from './styles'

const RoundInfo = (props) => {
  const next = props.showNextRound
  const roundIndex = next ? props.currentRound + 1 : props.currentRound
  const roundNumText = next ? 'Next Round' : `Round ${roundIndex + 1}`
  const roundName = props.rounds[roundIndex]
  const roundText = `${roundNumText}: ${roundName}`

  return (
    <View style={{ marginBottom: '5%' }}>
      <Text style={[commonStyles.boldCentered, { fontSize: 18 }]}>
        {roundText}
      </Text>
    </View>
  )
}

const mapStateToProps = (state) => {
  const { rounds, currentRound } = state
  return { rounds, currentRound }
}

export default connect(mapStateToProps)(RoundInfo)
