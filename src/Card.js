import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

const Card = ({ text }) => {
	return (
		<View style={{
			flex: 1,
			position: 'absolute',
			justifyContent: 'center',
			alignContent: 'center',
			borderWidth: 1,
			borderColor: 'red',
			width: '100%',
			marginTop: "80%"
		}}>
			<ImageBackground
				source={require('../assets/postit.png')}
				resizeMode='contain'
				style={{
					height: '220%',
					marginLeft: 10,
					borderWidth: 1,
					borderColor: 'green',
				}}
			>
				<View
					style={{
						position: 'absolute',
						top: "-20%",
						left: 0,
						right: 0,
						bottom: 0,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							flexWrap: 'wrap',
							fontWeight: 'bold',
							fontSize: 28,
							width: '55%',
						}}
					>
						{text}
					</Text>
				</View>
			</ImageBackground>
		</View>
	)
}

export default Card