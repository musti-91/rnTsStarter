import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { globalStyles } from '@assets/globalStyles'

interface IProps extends NavigationInjectedProps {}

class SignIn extends Component<IProps> {
  render() {
    const { container, txt } = globalStyles
    const { navigate } = this.props.navigation
    return (
      <View style={container}>
        <Text style={txt} onPress={() => navigate('signup')}>
          Switched to Sign in
        </Text>
      </View>
    )
  }
}

export default SignIn
