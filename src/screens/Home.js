import React, { useEffect } from 'react'
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  Slider,
  Text
} from 'react-native'
import { useDispatch } from 'react-redux'
import { createGame, reset } from '../data'
import { TEAM_COLORS, BLUE, DEFAULT_ROUND_LENGTH, LIGHT_BLUE } from '../constants'
import SaladImg from '../components/SaladImg'
import Screens from '../screens'
import commonStyles from '../styles'

const fontSize = 16

const textInput = {
  bottom: 60,
  height: 60,
  width: 300,
  fontSize
}

const styles = StyleSheet.create({
  textInput0: {
    ...textInput,
    color: TEAM_COLORS[0]
  },
  textInput1: {
    ...textInput,
    color: TEAM_COLORS[1]
  },
  timeInput: {
    ...textInput,
    alignSelf: 'center',
    textAlign: 'center',
    width: 200
  },
  spacedButton: {
    flex: 5,
    marginTop: 20,
    width: 200
  },
  sliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4
  },
  sliderText: {
    fontSize
  }
})

const Home = (props) => {
  const [team1, setTeam1] = React.useState('')
  const [team2, setTeam2] = React.useState('')
  const [roundLength, setTimerLength] = React.useState(DEFAULT_ROUND_LENGTH)
  const dispatch = useDispatch()
  const teamsValid = team1.trim() && team2.trim()

  useEffect(() => {
    dispatch(reset()) // ensure new game on first render
  }, [])

  return (
    <View style={commonStyles.container}>
      <SaladImg />
      <View style={{ marginTop: '10%' }}>
        <TextInput
          selectionColor={TEAM_COLORS[0]} // TODO cursor color Not working?
          style={styles.textInput0}
          underlineColorAndroid={TEAM_COLORS[0]}
          placeholder="Team 1 Name"
          onChangeText={(text) => setTeam1(text)}
          value={team1}
        />
        <TextInput
          selectionColor={TEAM_COLORS[1]} // TODO cursor color Not working?
          style={styles.textInput1}
          underlineColorAndroid={TEAM_COLORS[1]}
          placeholder="Team 2 Name"
          onChangeText={(text) => setTeam2(text)}
          value={team2}
        />
        <View
          style={{ bottom: 20 }}
        >
          <View style={styles.sliderTextContainer}>
            <Text style={styles.sliderText}>Round Length:</Text>
            <Text style={styles.sliderText}>{roundLength} seconds</Text>
          </View>
          <Slider
            minimumValue={5}
            maximumValue={180}
            minimumTrackTintColor={TEAM_COLORS[0]}
            maximumTractTintColor={TEAM_COLORS[1]} // TODO this not working? color to the right of the button
            step={5}
            value={roundLength}
            onValueChange={(value) => setTimerLength(value)}
            style={{ marginTop: 14 }}
            thumbTintColor={LIGHT_BLUE}
          />
        </View>
      </View>
      <View style={styles.spacedButton}>
        <Button
          title="New Game"
          disabled={!teamsValid}
          color={BLUE}
          onPress={() => {
            dispatch(createGame([team1, team2], roundLength))
            props.navigation.navigate(Screens.WRITE_CARDS)
          }}
        />
      </View>
    </View>
  )
}

export default Home
