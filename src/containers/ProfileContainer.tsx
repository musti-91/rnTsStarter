import React, { Component } from 'react'
import { NavigationInjectedProps, NavigationScreenProps } from 'react-navigation'
import { View, Text } from 'react-native'

import { globalStyles } from '@assets/globalStyles'
import { COLORS } from '@assets/constants'

interface IProps extends NavigationInjectedProps {}

class ProfileContainer extends Component<IProps> {
  render() {
    const { container, txt } = globalStyles
    return (
      <View style={[container, { backgroundColor: COLORS.COPPER }]}>
        <Text style={txt}>Profile Container</Text>
      </View>
    )
  }
}

export default ProfileContainer
