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
import Header from './src/Header'

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

const nav = title => ({ navigation }) => Header(navigation, title)

const AppNavigator = createStackNavigator(
  {
    [Screens.HOME]: {
      screen: Home,
      navigationOptions: nav('Salad Bowl')
    },
    [Screens.WRITE_CARDS]: {
      screen: WriteCards,
      navigationOptions: nav('Write Cards')
    },
    [Screens.START_TURN]: {
      screen: StartTurn,
      navigationOptions: nav('Next Turn')
    },
    [Screens.GUESSING]: {
      screen: Guessing,
      navigationOptions: nav('Salad Bowl')
    },
    [Screens.FINISHED_BOWL]: {
      screen: FinishedBowl,
      navigationOptions: nav('Finished Bowl')
    },
    [Screens.FINSIHED_LAST_BOWL]: {
      screen: FinishedLastBowl,
      navigationOptions: nav('Finished Bowl')
    },
    [Screens.GAME_OVER]: {
      screen: GameOver,
      navigationOptions: nav('Game Over')
    },
  },
  {
    initialRouteName: Screens.HOME
  },
)

const AppContainer = createAppContainer(AppNavigator)
