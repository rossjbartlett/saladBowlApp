import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import Home from './src/Home';
import WriteCards from './src/WriteCards';
import Guessing from './src/Guessing';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    WriteCards: {
      screen: WriteCards
    },
    Guessing: {
      screen: Guessing
    }
  },
  {
    initialRouteName: "Home"
  }
)


const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});