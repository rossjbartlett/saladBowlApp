import React from 'react'
import { Button, View, StyleSheet, TextInput } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import header from './Header'
import SaladImg from './SaladImg'
import { useDispatch } from 'react-redux'
import { createTeams } from './redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    marginBottom: "5%",
  },
  button: {
    flex: 5,
    marginTop: "10%",
    width: 200,
  },
  textInput: {
    bottom: 50,
    height: 60,
    marginBottom: 10,
    width: 300,
  },
})

const Home = (props) => {
  const [team1, setTeam1] = React.useState('');
  const [team2, setTeam2] = React.useState('');
  const dispatch = useDispatch()
  const teamsValid = team1.trim() && team2.trim()

  return (
    <View style={styles.container}>
      <SaladImg />
      <View>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='#a4c639'
          placeholder="Team Name"
          onChangeText={text => setTeam1(text)}
          value={team1}
        />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='#a4c639'
          placeholder="Team Name"
          onChangeText={text => setTeam2(text)}
          value={team2}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="New Game"
          disabled={!teamsValid}
          onPress={() => {
            const teams = [team1, team2]
            dispatch(createTeams(teams))
            console.log("Created teams:", teams)
            props.navigation.navigate('WriteCards')}
          }
        />
      </View>
    </View>
  )
}

Home.navigationOptions = header("Salad Bowl")

export default Home