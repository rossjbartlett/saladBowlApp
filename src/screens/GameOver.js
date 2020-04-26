import React from 'react'
import { connect } from 'react-redux'
import { Button, View, Text, StyleSheet } from 'react-native'
import { BLUE } from '../constants'
import Screens from '../screens'
import clearAndGo from '../clearAndGo'
import SaladImg from '../components/SaladImg'
import Scoreboard from '../components/Scoreboard'
import commonStyles from '../styles'

const styles = StyleSheet.create({
  big: {
    fontSize: 32
  }
})

const GameOver = ({ score, teamColors, navigation }) => {
  const scores = Object.values(score)
  const tied = scores[0] === scores[1]
  const winningTeam = tied ? null : Object.keys(score).reduce((t1, t2) => score[t1] > score[t2] ? t1 : t2)
  const winningTeamColor = teamColors[winningTeam]

  return (
    <View style={commonStyles.container}>

      <Scoreboard />
      <Text style={[commonStyles.bold, styles.big]}>
        {tied ? (
          "It's a tie!"
        ) : (
          <Text style={[commonStyles.bold, styles.big]}>
              Team
            <Text style={{ color: winningTeamColor }}> {winningTeam} </Text>
            wins!
          </Text>
        )}
      </Text>

      <SaladImg />

      <Text style={commonStyles.text}>Game Over</Text>
      {/* TODO show all the cards, scrolling like movie credits */}
      <View style={commonStyles.buttonContainer}>
        <Button
          title='New Game'
          color={BLUE}
          onPress={() => clearAndGo(navigation, Screens.HOME)}

        />
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  const { teamColors, score } = state
  return { teamColors, score }
}

export default connect(mapStateToProps)(GameOver)
