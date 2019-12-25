import React from 'react'
import { Image } from 'react-native'

const SaladImg = (props) => {
  const styles = props.style || {}
    return (
        <Image
            style={{ width: "80%", height: "50%" , resizeMode: 'contain', marginTop: -20, marginBottom: 10, ...styles }}
            source={require("../assets/salad.png")}
        />
    )
}

export default SaladImg