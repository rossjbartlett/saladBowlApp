import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
// import CreateCardDialog from './src/CreateCardDialog';
import Dialog from "react-native-dialog";
import CountdownCircle from 'react-native-countdown-circle'
import Card from './Card'

const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems: 'center',
		marginTop: "5%",
		marginBottom: "5%",
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: "10%"
	},
	marginTop: {
		marginTop: "5%",
	},
})

const Guessing = ({ navigation }) => {
	const seconds = navigation.getParam('seconds', 5) // TODO 60
	const cardsInBowl = navigation.getParam('cardsInBowl', [])
	const [start, setStart] = React.useState(false)
	const [chosenCard, setChosenCard] = React.useState()
	const [chosenIndex, setChosenIndex] = React.useState()
	const [finishedBowl, setFinishedBowl] = React.useState(false)
	const [timeUp, setTimeUp] = React.useState(false)
	const [pointsThisTurn, setPointsThisTurn] = React.useState(0)
	const playing = start && !finishedBowl

	React.useEffect(() => {
		drawCard() // first draw
	}, [])

	const drawCard = () => {
		const randomIndex = Math.floor(Math.random() * cardsInBowl.length)
		const randomCard = cardsInBowl[randomIndex];
		setChosenCard(randomCard)
		setChosenIndex(randomIndex)
	}

	const guessSuccess = () => {
		cardsInBowl.splice(chosenIndex, 1) // remove card from bowl
		setPointsThisTurn(pointsThisTurn + 1)
		if (cardsInBowl.length <= 0) {
			setFinishedBowl(true)
		}
		drawCard()
	}

	return (
		<View style={styles.container}>
			<Text>Guessing Screen</Text>
			<Text>Cards in Bowl: {cardsInBowl.length}</Text>

			<View style={styles.marginTop}>
				{!start && (
					<Button
						title="Start Turn"
						onPress={() => {
							setStart(true)
						}}
					/>
				)}
				{start && (
					<CountdownCircle
						seconds={seconds}
						radius={100}
						borderWidth={6}
						color="#2fa7d9"
						bgColor="#fff"
						textStyle={{ fontSize: 64 }}
						onTimeElapsed={() => {
							setTimeUp(true)
						}}
					/>
				)}
			</View>
			<View style={styles.marginTop} >
				{finishedBowl && (
					<Text>You finished the bowl!</Text>
				)}
				{timeUp && (
					<Text>Time Up!</Text>
				)}
			</View>

			{playing && (
				<Card text={chosenCard} />					
			)}

			<View style={styles.bottom}>
				{playing && !timeUp && (
					<Button
						title="Got it!"
						onPress={() => {
							guessSuccess()
						}}
					/>
				)}
				{timeUp && (
					<Button
						title="Next Player"
						onPress={() => {
							console.log("routing with bowl: ", cardsInBowl)
							navigation.navigate('Guessing', { cardsInBowl } )
						}
						}
					/>
				)}
			</View>
		</View>
	)

}

export default Guessing
