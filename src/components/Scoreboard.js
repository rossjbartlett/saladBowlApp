import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import commonStyles from '../styles'

const Scoreboard = (props) => {
  const [t1, t2] = props.teams

  return (
    <View style={{ marginBottom: '5%' }}>

      <Text style={[commonStyles.boldCentered, { fontSize: 24 }]}>
        Score:
        <Text style={{ color: props.teamColors[t1] }}> {props.score[t1]} </Text>
        -
        <Text style={{ color: props.teamColors[t2] }}> {props.score[t2]} </Text>
      </Text>

    </View>
  )
}

const mapStateToProps = (state) => {
  const { score, teamColors, teams } = state
  return { score, teamColors, teams }
}

export default connect(mapStateToProps)(Scoreboard)
