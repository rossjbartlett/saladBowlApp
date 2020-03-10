
import React from 'react'
import { Alert, Text, Dimensions } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ICON_SIZE = 24

const WIDTH = Dimensions.get('window').width
//   < LinearGradient
// style = { styles.gradient }
// locations = { [0, 1.0]}
// colors = { ['#5ED2A0', '#339CB1']}
//   />
const Header = (title) => {
  return {
    title,
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#0E71FF',
      // backgroundColor: 'linear-gradient(90deg, rgba(14,113,255,1) 50%, rgba(14,190,0,1) 100%)'
    },
    // headerBackground: (
    // <LinearGradient
    //   colors={['#a13388', '#10356c']}
    //   style={{ flex: 1 }}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 0 }}
    // />
    // <Image
    //   // resizeMode='contain'
    //   style={{ width: 100, height: 200, resizeMode: 'contain'}}
    //   source={require('../assets/gradient.png')}
    // />
    // ),
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      width: WIDTH - 75,
    },
    headerRight: () => (
      <Menu>
        <MenuTrigger>
          <Icon
            name='more-vert'
            size={ICON_SIZE}
            color={'white'}
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            customStyles={optionsStyles}
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
    ),
  }
}

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'green',
    width: 'min-content',
  },
  optionWrapper: {
    backgroundColor: 'yellow',
    // width: 0,
  },
}

export default (Header)
