import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import { COLORS, ICONS } from '@assets/constants'

import IconHelper from '@components/helper/IconHelper'
/**
 * render tabs Components
 * https://reactnavigation.org/docs/en/bottom-tab-navigator.html#docsNav
 */
import MainContainer from '@containers/MainContainer'
import MyModal from '@containers/MyModal'
import SettingsContainer from '@containers/SettingsContainer'
import ProfileContainer from '@containers/ProfileContainer'

const SettingsNavigator = createStackNavigator(
  {
    Settings: SettingsContainer,
    Modal: MyModal
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
// const HomeNavigator = createStackNavigator({
//   HomeScreen: NoteContainer,
// })

const TabsNavigationContainer = createBottomTabNavigator(
  {
    Home: {
      screen: MainContainer,
      title: 'Main Container',
      navigationOptions: {
        tabBarIcon: IconHelper(ICONS.CHECK)
      }
    },
    Profile: {
      screen: ProfileContainer,
      title: 'My Component',
      navigationOptions: {
        tabBarIcon: IconHelper(ICONS.CHECK)
      }
    },
    Settings: {
      screen: SettingsNavigator,
      title: 'Settings',
      navigationOptions: {
        tabBarIcon: IconHelper(ICONS.INFO)
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.COPPER,
      activeBackgroundColor: COLORS.MISSION_TAN,
      inactiveBackgroundColor: COLORS.MISSION_TAN,
      inactiveTintColor: COLORS.BURGUNDY,
      style: {
        borderColor: COLORS.MISSION_TAN
      }
    }
  }
)

export default TabsNavigationContainer
