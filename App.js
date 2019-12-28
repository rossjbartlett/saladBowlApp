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
import { MenuProvider } from 'react-native-popup-menu';

/**
 * TODO
 * keep score - after 3rd rounds, show scoreboard
 * 3 rounds, say what round youre starting (customize num of roudns?)
 * make the header be the currentTeamColor
 * make button on nav bar to reset game, go back to Home (reset cards, cards in bowl, score)
 * disable back button/swipe
 * sounds on timer
 * use redux store for cards in bowl?
 * disable clickaway on WriteCards
 */

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MenuProvider>
          <AppContainer />
        </MenuProvider>
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
