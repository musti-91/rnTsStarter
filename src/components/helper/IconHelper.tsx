import * as React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5'

import { COLORS } from '@assets/constants'

const IconHelper = (name: string, size: number = 20, color: any = COLORS.WHITE) => (
  <Icon name={name} color={color} size={size} />
)

export default IconHelper
