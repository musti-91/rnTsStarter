import React, { Component } from 'react'
import { NavigationInjectedProps, SafeAreaView } from 'react-navigation'
import { Text } from 'react-native'

import { globalStyles } from '@assets/globalStyles'
import { COLORS } from '@assets/constants'

interface IProps extends NavigationInjectedProps {
  color: string | 'red'
}
class SettingsContainer extends Component<IProps> {
  render() {
    const { container, txt } = globalStyles
    const { navigate } = this.props.navigation
    return (
      <SafeAreaView style={[container, { backgroundColor: COLORS.LIGHT_BLUE }]}>
        <Text>Settings Container</Text>
        <Text style={txt} onPress={() => navigate('Modal')}>
          click here to show Modal
        </Text>
      </SafeAreaView>
    )
  }
}

export default SettingsContainer
