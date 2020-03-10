import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  boldCentered: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

const Scoreboard = (props) => {
  const [t1, t2] = props.teams
  const gameOver = props.currentRound >= props.rounds.length
  const next = props.showNextRound

  const roundName = props.rounds[props.currentRound]
  const roundNumText = next ? 'Next Round' : `Round ${props.currentRound + 1}`
  const roundText = `${roundNumText}: ${roundName}`

  return (
    <View style={{ marginBottom: '5%' }}>

      <Text style={[styles.boldCentered, { fontSize: 24 }]}>
        Score:
        <Text style={{ color: props.teamColors[t1] }}> {props.score[t1]} </Text>
        -
        <Text style={{ color: props.teamColors[t2] }}> {props.score[t2]} </Text>
      </Text>

      {!gameOver && (
        <Text style={[styles.boldCentered, { fontSize: 18 }]}>
          {roundText}
        </Text>
      )}

    </View>
  )
}

const mapStateToProps = (state) => {
  const { score, teamColors, teams, rounds, currentRound } = state
  return { score, teamColors, teams, rounds, currentRound }
}

export default connect(mapStateToProps)(Scoreboard)
