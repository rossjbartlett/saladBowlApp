import React from 'react'
import store from './src/data'
import { Provider } from 'react-redux'
import { MenuProvider } from 'react-native-popup-menu'
import AppContainer from './src/navigation'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MenuProvider>
          <AppContainer />
        </MenuProvider>
      </Provider>
    )
  }
}
