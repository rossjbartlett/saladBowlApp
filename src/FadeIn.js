import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

const FadeIn = (props) => {
  const [fadeAnim] = useState(new Animated.Value(-1)) // Initial value for opacity

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: props.duration || 3000,
        delay: props.delay || 0,
      }
    ).start()
  }, [])

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  )
}

export default FadeIn
