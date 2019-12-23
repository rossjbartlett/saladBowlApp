import React, { Component } from 'react'
import { Button, View, Text, TextInput } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import Dialog from "react-native-dialog"

const WriteCards = (props) => {
    const [showPopup, setShowPopup] = React.useState(false)
    const [input, setInput] = React.useState('')
    const [cards, setCards] = React.useState([])

    const handleCancel = () => {
        setInput('')
        setShowPopup(false)
    }
     
    const handleSubmit = (input) => {
        if (input.trim()) {
            const newCards = cards.concat([input])
            setCards(newCards)
        }
        setInput('')
        setShowPopup(false)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <Text>WriteCards Screen</Text>
            <Button
                title="Add Card"
                onPress={() => {
                    setShowPopup(true)
                }}
            />
            <Dialog.Container visible={showPopup}>
                <Dialog.Title>New Card</Dialog.Title>
                <Dialog.Input
                    placeholder="Type a word or phrase"
                    onChangeText={text => setInput(text)}
                    value={input}
                    style={{borderBottomWidth: 1}}
                />
                <Dialog.Button label="Cancel" onPress={e => handleCancel()} />
                <Dialog.Button label="Submit" onPress={e => handleSubmit(input)}/>
            </Dialog.Container>
            {/* {cards.map(c => <Text>{c}</Text>)} */}
            <Text>Cards in Bowl: {cards.length}</Text>
            <Button
                title="Start Game"
                onPress={() => props.navigation.navigate('Guessing', { cardsInBowl: cards } )}
            />
        </View>
    )
    
}

export default WriteCards
