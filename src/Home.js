import React, { useEffect } from 'react'
import { Button, View, StyleSheet, TextInput } from 'react-native'
import Header from './Header'
import SaladImg from './SaladImg'
import { useDispatch } from 'react-redux'
import { createGame, reset } from './data'
import { TEAM_COLORS } from './Teams'

const _textInput = {
  bottom: 60,
  height: 60,
  marginBottom: 0,
  width: 300,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  button: {
    flex: 5,
    marginTop: '10%',
    width: 200,
  },
  textInput0: {
    ..._textInput,
    color: TEAM_COLORS[0]
  },
  textInput1: {
    ..._textInput,
    color: TEAM_COLORS[1]
  }
})

const Home = (props) => {
  const [team1, setTeam1] = React.useState('')
  const [team2, setTeam2] = React.useState('')
  const dispatch = useDispatch()
  const teamsValid = team1.trim() && team2.trim()

  useEffect(() => {
    dispatch(reset()) // ensure new game on first render
  }, [])

  return (
    <View style={styles.container}>
      <SaladImg />
      <View>
        <TextInput
          selectionColor={TEAM_COLORS[0]} // TODO Not working?
          style={styles.textInput0}
          underlineColorAndroid={TEAM_COLORS[0]}
          placeholder='Team 1 Name'
          onChangeText={text => setTeam1(text)}
          value={team1}
        />
        <TextInput
          selectionColor={TEAM_COLORS[1]} // TODO Not working?
          style={styles.textInput1}
          underlineColorAndroid={TEAM_COLORS[1]}
          placeholder='Team 2 Name'
          onChangeText={text => setTeam2(text)}
          value={team2}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='New Game'
          disabled={!teamsValid}
          onPress={() => {
            const teams = [team1, team2]
            dispatch(createGame(teams))
            props.navigation.navigate('WriteCards')
          }
          }
        />
      </View>
    </View>
  )
}

Home.navigationOptions = Header('Salad Bowl')

export default Home
