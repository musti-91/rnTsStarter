import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { globalStyles } from '@assets/globalStyles'
import { NavigationInjectedProps } from 'react-navigation'
import { COLORS } from '@assets/constants'

interface IProps extends NavigationInjectedProps {}
/**
 * using multi styles for component
 * injected navigation props with own props
 * @class SignUp
 * @extends {Component<IProps>}
 */
class SignUp extends Component<IProps> {
  render() {
    const { container, txt } = globalStyles
    const { navigate } = this.props.navigation

    return (
      <View style={[container, styles.container]}>
        <Text style={txt} onPress={() => navigate('HomeNavigator')}>
          Switched to SignUp
        </Text>
      </View>
    )
  }
}

/**
 * you could use it directly without Stylesheet
 * <<View style={[container, {backgroundColor: COLORS.GREY }]}/>>
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY
  }
})
export default SignUp
