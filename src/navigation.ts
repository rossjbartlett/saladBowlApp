import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Screens from './screens'
import Home from './screens/Home'
import WriteCards from './screens/WriteCards'
import StartTurn from './screens/StartTurn'
import Guessing from './screens/Guessing'
import FinishedBowl from './screens/FinishedBowl'
import FinishedLastBowl from './screens/FinishedLastBowl'
import GameOver from './screens/GameOver'
import Header from './components/Header'

// navigationOptions
const nav = title => ({ navigation }) => ({...Header(navigation, title), gesturesEnabled: false})

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
    }
  },
  {
    initialRouteName: Screens.HOME
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
