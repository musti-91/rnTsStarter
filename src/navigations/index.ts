import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'

// import Tabs from './TabsNavigation'
import SignIn from '@containers/Auth/SignIn'
import SignUp from '@containers/Auth/SignUp'

import MainContainer from '@containers/MainContainer'
import MyComponent from '@components/MyComponent'

const AuthScreens = createSwitchNavigator({
  SignIn,
  SignUp
})

const Tabs = createBottomTabNavigator({
  home: MainContainer,
  comp: MyComponent
})
const MainStackNavigator = createSwitchNavigator({
  auth: AuthScreens,
  tabs: Tabs
})

export default createAppContainer(MainStackNavigator)
