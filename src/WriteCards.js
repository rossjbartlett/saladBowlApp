import React from 'react'
import { Button, View, Text, StyleSheet, Vibration } from 'react-native'
import DialogInput from 'react-native-dialog-input'
import { useDispatch } from 'react-redux'
import { setCards } from './data'
import { BLUE } from './constants'
import Screens from './screens'
import SaladImg from './SaladImg'
import commonStyles from './styles'

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%'
  }
})

const WriteCards = (props) => {
  const [showPopup, setShowPopup] = React.useState(false)
  const [localCards, setLocalCards] = React.useState([])
  const dispatch = useDispatch()

  const handleCancel = () => {
    setShowPopup(false)
  }

  const handleSubmit = (input) => {
    if (input.trim()) {
      const newCards = localCards.concat([input])
      setLocalCards(newCards)
    }
    setShowPopup(false)
  }

  return (
    <View style={commonStyles.container}>
      <SaladImg />
      <View style={{ flex: 3 }}>
        <Text style={commonStyles.text}>Cards in Bowl: {localCards.length}</Text>
      </View>
      <View style={[{ flex: 3 }, commonStyles.buttonContainer]}>
        <Button
          title='Add Card'
          color={BLUE}
          onPress={() => {
            setShowPopup(true)
          }}
        />
      </View>
      <DialogInput
        isDialogVisible={showPopup}
        title='New Card'
        hintInput='Type a word or phrase'
        submitInput={input => handleSubmit(input)}
        closeDialog={() => handleCancel()}>
      </DialogInput>
      <View style={styles.bottom}>
        <Button
          title='Start Game'
          disabled={localCards.length < 1}
          color={BLUE}
          onPress={() => {
            dispatch(setCards(localCards))
            Vibration.vibrate(200)
            props.navigation.navigate(Screens.START_TURN, { cardsInBowl: localCards })
          }}
        />
      </View>
    </View>
  )
}

export default WriteCards
