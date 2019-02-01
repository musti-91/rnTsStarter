import { COLORS } from '@assets/constants'
import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLUE
  },
  txt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: COLORS.WHITE
  }
})
