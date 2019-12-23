import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import header from './Header'
import SaladImg from './SaladImg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    marginBottom: "5%",
  },
  button: {
    flex: 3,
    marginTop: "5%",
    width: 200,
  },
})

const Home = (props) => {
  return (
    <View style={styles.container}>
      <SaladImg />
      <View style={styles.button}>
        <Button
          title="New Game"
          onPress={() => props.navigation.navigate('WriteCards')}
        />
      </View>
    </View>
  )
}

Home.navigationOptions = header("Salad Bowl")

export default Home