import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  boldCentered: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const RoundInfo = (props) => {
  const next = props.showNextRound
  const roundIndex = next ? props.currentRound + 1 : props.currentRound
  const roundNumText = next ? 'Next Round' : `Round ${roundIndex + 1}`
  const roundName = props.rounds[roundIndex]
  const roundText = `${roundNumText}: ${roundName}`

  return (
    <View style={{ marginBottom: '5%' }}>
      <Text style={[styles.boldCentered, { fontSize: 18 }]}>
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
