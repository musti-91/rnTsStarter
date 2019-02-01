import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { globalStyles } from '@assets/globalStyles'

class MainContainer extends Component {
  render() {
    const { container, txt } = globalStyles
    return (
      <View style={container}>
        <Text style={txt}>Main Container</Text>
      </View>
    )
  }
}

export default MainContainer
