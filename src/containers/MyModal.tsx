import React, { Component } from 'react'
import { NavigationInjectedProps } from 'react-navigation'
import { View, Text } from 'react-native'

import { globalStyles } from '@assets/globalStyles'
import { COLORS } from '@assets/constants'

interface IProps extends NavigationInjectedProps {
  color?: string | 'red'
}
class MyModal extends Component<IProps> {
  render() {
    const { container, txt } = globalStyles
    const { navigate } = this.props.navigation
    return (
      <View style={[container, { backgroundColor: COLORS.BURGUNDY }]}>
        <Text style={txt} onPress={() => navigate('switch')}>
          Swipe down to hide modal
        </Text>
      </View>
    )
  }
}

export default MyModal
