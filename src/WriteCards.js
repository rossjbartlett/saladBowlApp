import React from 'react'
import { bindActionCreators } from 'redux'
import { Button, View, Text, TextInput, StyleSheet, Vibration } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import DialogInput from 'react-native-dialog-input'
import { connect, useDispatch } from 'react-redux'
import { setCards } from './redux'
import Header from './Header'
import SaladImg from './SaladImg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    marginBottom: "5%",
  },
  text: {
    fontSize: 24,
  },
  button: {
    flex: 3,
    marginTop: "5%",
    width: 200,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: "10%"
  },
})

const WriteCards = (props) => {
  const [showPopup, setShowPopup] = React.useState(false)
  const [input, setInput] = React.useState('')
  const [localCards, setLocalCards] = React.useState([])
  const dispatch = useDispatch()

  const handleCancel = () => {
    setInput('')
    setShowPopup(false)
  }

  const handleSubmit = (input) => {
    if (input.trim()) {
      const newCards = localCards.concat([input])
      setLocalCards(newCards)
      console.log("added card:", input)
    }
    setInput('')
    setShowPopup(false)
  }

  return (
    <View style={styles.container}>
      <SaladImg />
      <View style={{ flex: 3 }}>
        <Text style={styles.text}>Cards in Bowl: {localCards.length}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Add Card"
          onPress={() => {
            setShowPopup(true)
          }}
        />
      </View>
      <DialogInput
        isDialogVisible={showPopup}
        title="New Card"
        hintInput="Type a word or phrase"
        submitInput={input => handleSubmit(input)}
        closeDialog={() => handleCancel()}>
      </DialogInput>
      <View style={styles.bottom}>
        <Button
          title="Start Game"
          disabled={localCards.length < 1}
          onPress={() => {
            dispatch(setCards(localCards))
            console.log("starting game, cards:", localCards)
            // props.setCurrentTeam("BLUE")
            // dispatch(setCurrentTeam)
            Vibration.vibrate(200)
            props.navigation.navigate('StartTurn', { cardsInBowl: localCards })
          }}
        />
      </View>
    </View>
  )
}

WriteCards.navigationOptions = Header("Fill The Bowl")

export default WriteCards
