import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions, StackActions } from 'react-navigation';
import { Button, View, Text, StyleSheet, Vibration } from 'react-native'
import Header from './Header'
import SaladImg from './SaladImg'
import Scoreboard from './Scoreboard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    justifyContent: 'center',
  },
  med: {
    fontSize: 24,
  },
  big: {
    fontSize: 32,
  },
  button: {
    marginTop: '5%',
    width: 200
  },
})

const GameOver = ({ score, teamColors, navigation }) => {
  // const dispatch = useDispatch()
  const scores = Object.values(score)
  const tied = scores[0] === scores[1]
  const winningTeam = tied ? null : Object.keys(score).reduce((t1, t2) => score[t1] > score[t2] ? t1 : t2)
  const winningTeamColor = teamColors[winningTeam]

  return (
    <View style={styles.container}>

      <Scoreboard />

      <Text style={[styles.bold, styles.big]}>
        Team
        <Text style={{ color: winningTeamColor }}> {winningTeam} </Text>
        wins!
      </Text>

      <SaladImg />

      <Text style={styles.med}>Game Over</Text>
      {/* TOOD show all the cards, scrolling like movie credits */}
      <View style={styles.button}>
        <Button
          title='New Game'
          onPress={() => {
            Vibration.vibrate()
            navigation.dispatch(StackActions.reset(
              {
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Home' })
                ]
              }))
          }}
        />
      </View>
    </View>
  )
}

GameOver.navigationOptions = Header('Game Over')

const mapStateToProps = (state) => {
  const { teamColors, score } = state
  return { teamColors, score }
}

export default connect(mapStateToProps)(GameOver)
