import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { globalStyles } from '@assets/globalStyles'
import { NavigationInjectedProps, SafeAreaView } from 'react-navigation'
import { COLORS } from '@assets/constants'

/**
 * NavigationInjectedProps inject navigation into component
 */
interface IProps extends NavigationInjectedProps {}
class MyComponent extends Component<IProps> {
  render() {
    const { container, txt } = globalStyles
    return (
      <SafeAreaView style={[container, { backgroundColor: COLORS.PRETTY }]}>
        <Text style={txt}>MyComponent</Text>
      </SafeAreaView>
    )
  }
}

export default MyComponent
