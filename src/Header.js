
import React from 'react'
import { Alert, Text, Dimensions } from 'react-native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import Icon from 'react-native-vector-icons/MaterialIcons'
import clearAndGo from './ClearAndGo'
import { BLUE } from './constants'
import Screens from './Screens'


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

const CustomMenu = (navigation) => {

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
            'Are you sure you want to reset? Any curent game progress will be lost.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => clearAndGo(navigation, Screens.HOME)
              },
            ],
            { cancelable: false },
          )} >
          <Text style={{ color: 'red' }}>Reset Game</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  )
}

const Header = (navigation, title) => {
  return {
    title,
    headerLeft: null,
    headerStyle: {
      backgroundColor: BLUE,
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width: WIDTH - 75,
    },
    headerRight: () => CustomMenu(navigation),
  }
}

export default (Header)
