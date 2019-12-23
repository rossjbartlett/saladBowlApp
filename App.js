import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import store from './src/redux';
import { Provider } from 'react-redux';

import Home from './src/Home';
import WriteCards from './src/WriteCards';
import StartTurn from './src/StartTurn';
import Guessing from './src/Guessing';
import FinishedBowl from './src/FinishedBowl';

/**
 * TODO
 * make button on nav bar to reset game, go back to Home
 * sounds on timer
 * 3 rounds, say what round youre starting
 * keep score - after 3rd rounds, show scoreboard
 * use redux store for cards in bowl?
 */

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
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
    StartTurn: {
      screen: StartTurn
    },
    Guessing: {
      screen: Guessing
    },
    FinishedBowl: {
      screen: FinishedBowl
    },
  },
  {
    initialRouteName: "Home"
  }
)


const AppContainer = createAppContainer(AppNavigator);
