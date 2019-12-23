import React, { Component } from 'react';
import { Button, View, Text, ImageBackground} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
export default class Home extends Component {
    render() {
      return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
                <Button
                    title="Start"
                    onPress={() => this.props.navigation.navigate('WriteCards')}
                />
            </View>
        </>
      )
    }
  }