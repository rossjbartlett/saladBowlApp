
import React from 'react'
import { Alert, Text, Dimensions } from 'react-native'

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ICON_SIZE = 24

const WIDTH = Dimensions.get('window').width

const menuOptionStyles = {
  optionsContainer: {
    // backgroundColor: 'green',
    // width: 'min-content',
  },
  optionWrapper: {
    // backgroundColor: 'yellow',
    // width: 0,
  },
}
const CustomMenu = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Icon
          name='more-vert'
          size={ICON_SIZE}
          color={'white'}
        />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption>
          <Text style={{ color: 'black' }}>Info</Text>
          {/* TODO info menu? */}
        </MenuOption>
        <MenuOption
          customStyles={menuOptionStyles}
          onSelect={() => Alert.alert(
            'Reset Game',
            'Are you sure you want to reset?',
            [
              { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
          )} >
          <Text style={{ color: 'red' }}>Reset Game</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  )
}

const Header = (title) => {
  return {
    title,
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#0E71FF', // TODO blue constant?
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width: WIDTH - 75,
    },
    headerRight: () => CustomMenu(),
  }
}

export default (Header)
