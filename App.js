import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import store from './src/data'
import { Provider } from 'react-redux'
import Screens from './src/Screens'
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
    [Screens.HOME]: {
      screen: Home
    },
    [Screens.WRITE_CARDS]: {
      screen: WriteCards
    },
    [Screens.START_TURN]: {
      screen: StartTurn
    },
    [Screens.GUESSING]: {
      screen: Guessing
    },
    [Screens.FINISHED_BOWL]: {
      screen: FinishedBowl
    },
    [Screens.FINSIHED_LAST_BOWL]: {
      screen: FinishedLastBowl
    },
    [Screens.GAME_OVER]: {
      screen: GameOver
    },
  },
  {
    initialRouteName: Screens.HOME
  },
)

const AppContainer = createAppContainer(AppNavigator)
