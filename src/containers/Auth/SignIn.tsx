import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { globalStyles } from '@assets/globalStyles'

interface IProps {}

class SignIn extends Component<NavigationScreenProps> {
  render() {
    const { container, txt } = globalStyles
    const { navigate } = this.props.navigation
    return (
      <View style={container}>
        <Text style={txt} onPress={() => navigate('SignUp')}>
          SignIn
        </Text>
      </View>
    )
  }
}

export default SignIn
