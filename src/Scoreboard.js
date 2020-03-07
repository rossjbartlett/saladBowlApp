import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

const Scoreboard = ({ score, teamColors, teams }) => {
  const [t1, t2] = teams
  console.log(`scoreboard Score: ${score[t1]}-${score[t2]}`)
  return (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 24,
      }}
    >
      Score:
      <Text style={{ color: teamColors[t1] }}> {score[t1]} </Text>
      -
      <Text style={{ color: teamColors[t2] }}> {score[t2]} </Text>
    </Text>
  )
}


const mapStateToProps = (state) => {
  const { score, teamColors, teams } = state
  return { score, teamColors, teams }
}

export default connect(mapStateToProps)(Scoreboard)
