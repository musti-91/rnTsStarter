import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { globalStyles } from '@assets/globalStyles'

import { NavigationInjectedProps } from 'react-navigation'
interface IProps {}

class SignUp extends Component<NavigationInjectedProps> {
  render() {
    const { container, txt } = globalStyles
    const { navigate } = this.props.navigation
    return (
      <View style={container}>
        <Text style={txt} onPress={() => navigate('tabs')}>
          SignUp
        </Text>
      </View>
    )
  }
}

export default SignUp
