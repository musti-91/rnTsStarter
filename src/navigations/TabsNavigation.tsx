import { createBottomTabNavigator } from 'react-navigation'

import { COLORS, ICONS } from '@assets/constants'

import IconHelper from '@components/helper/IconHelper'
/**
 * Dummy pages
 */
import MyComponent from '@components/MyComponent'
import MainContainer from '@containers/MainContainer'

/**
 * Tab navigator, Home screen after Auth Screens
 */
const Tabs = createBottomTabNavigator(
  {
    mainContainer: {
      screen: MainContainer,
      title: 'MainContainer',
      navigationOptions: {
        tabBarIcon: IconHelper(ICONS.CHECK)
      }
    },
    myComponent: {
      screen: MyComponent,
      title: 'my component',
      navigationOptions: {
        tabBarIcon: IconHelper(ICONS.CHECK)
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.RED,
      tabStyle: {
        backgroundColor: COLORS.RED,
        opacity: 0.5
      }
    }
  }
)

export default Tabs
