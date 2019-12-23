import React, { Component } from 'react'
import { Button, View, Text, TextInput, StyleSheet, Vibration } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import Dialog from "react-native-dialog"
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { setCards, setCardsInBowl } from './redux'
import header from './Header'
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
        <View style={styles.container}>
            <SaladImg/>
            <View style={{ flex: 3 }}>
                <Text style={styles.text}>Cards in Bowl: {cards.length}</Text>
            </View>
            <View style={styles.button}>
                <Button
                    title="Add Card"
                    onPress={() => {
                        setShowPopup(true)
                    }}
                />
            </View>
            <Dialog.Container visible={showPopup}>
                <Dialog.Title>New Card</Dialog.Title>
                <Dialog.Input
                    placeholder="Type a word or phrase"
                    onChangeText={text => setInput(text)}
                    value={input}
                    style={{ borderBottomWidth: 1 }}
                />
                <Dialog.Button label="Cancel" onPress={e => handleCancel()} />
                <Dialog.Button label="Submit" onPress={e => handleSubmit(input)} />
            </Dialog.Container>
            {/* {cards.map(c => <Text>{c}</Text>)} */}
            <View style={styles.bottom}>
                <Button
                    title="Start Game"
                    disabled={cards.length < 1}
                    onPress={() => {
                        props.setCards(cards)
                        // props.setCardsInBowl(cards)
                        console.log("starting game, cards:", cards)
                        Vibration.vibrate(200)
                        props.navigation.navigate('StartTurn', { cardsInBowl: cards })
                    }}
                />
            </View>
        </View>
    )

}

WriteCards.navigationOptions = header("Fill The Bowl")


const mapStateToProps = (state) => {
    const { cards } = state
    return { cards }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setCards,
        // setCardsInBowl,
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(WriteCards)
