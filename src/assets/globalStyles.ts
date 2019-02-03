import { COLORS } from '@assets/constants'
import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MISSION_TAN
  },
  txt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: COLORS.WHITE,
    /**
     * supportted fonts:
     * https://github.com/react-native-training/react-native-fonts
     * downloaded font and set it up.
     */
    fontFamily: 'Verdana'
  }
})
