import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

const Card = ({ text }) => {
  return (
    <View style={{
      flex: 1,
      position: 'absolute',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      marginTop: '80%'
    }}>
      <ImageBackground
        source={require('../assets/postit.png')}
        resizeMode='contain'
        style={{
          height: '220%',
          marginLeft: 30,
        }}
      >
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: '100%',
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Text
            style={{
              flexWrap: 'wrap',
              fontWeight: 'bold',
              fontSize: 28,
              width: '55%',
            }}
          // TODO put a random tilt
          >
            {text}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Card
