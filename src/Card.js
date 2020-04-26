import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: '80%'
  },
  img: {
    height: '220%',
    marginLeft: 30
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '100%',
    left: 0,
    right: 0,
    bottom: 0
  },
  cardText: {
    flexWrap: 'wrap',
    fontSize: 28,
    width: '55%'
  }
})

const Card = ({ text }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require('../assets/postit.png')}
        resizeMode='contain'
        style={styles.img}
      >
        <View
          style={styles.textContainer}
        >
          <Text
            style={styles.cardText}
          >
            {text}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Card
