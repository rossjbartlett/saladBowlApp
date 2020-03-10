import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import store from './src/data'
import { Provider } from 'react-redux'

import Home from './src/Home'
import WriteCards from './src/WriteCards'
import StartTurn from './src/StartTurn'
import Guessing from './src/Guessing'
import FinishedBowl from './src/FinishedBowl'
import FinishedLastBowl from './src/FinishedLastBowl'
import GameOver from './src/GameOver'

import { MenuProvider } from 'react-native-popup-menu'

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
    FinishedLastBowl: {
      screen: FinishedLastBowl
    },
    GameOver: {
      screen: GameOver
    },
  },
  {
    initialRouteName: 'Home'
  },
)

const AppContainer = createAppContainer(AppNavigator)
