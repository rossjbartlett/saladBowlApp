import { Vibration } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

const clearAndGo = (navigation, routeName) => {
  Vibration.vibrate()
  navigation.dispatch(StackActions.reset(
    {
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    }
  ))
}

export default clearAndGo
