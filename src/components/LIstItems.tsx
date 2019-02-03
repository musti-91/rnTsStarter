import React, { SFC } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { ListItem } from 'react-native-elements'
import { globalStyles } from '@assets/globalStyles'
interface IProps {
  list: any[]
  onPress(id: string): void
  error?: any
  iconName?: any
}

const ListItems: SFC<IProps> = ({ list, onPress, error, iconName }) => {
  const { container } = globalStyles
  if (error) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    )
  }
  return (
    <View style={container}>
      {list.map(item => (
        <ListItem
          title={item.title}
          key={item.id}
          subtitle={item.content}
          leftAvatar={<Icon name={iconName} />}
          onPress={() => onPress}
        />
      ))}
    </View>
  )
}
export default ListItems
