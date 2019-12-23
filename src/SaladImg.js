import React from 'react'
import { Image } from 'react-native'

const SaladImg = () => {  
    return (
        <Image
            style={{ width: "80%", height: "50%" , resizeMode: 'contain' }}
            source={require("../assets/salad.png")}
        />
    )
}

export default SaladImg