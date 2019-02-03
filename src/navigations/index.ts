import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import TabsNavigationContainer from './TabsNavigation'
import SignIn from '@containers/Auth/SignIn'
import SignUp from '@containers/Auth/SignUp'

const AuthenticationNavigator = createSwitchNavigator({
  signin: SignIn,
  signup: SignUp
})

const AppContainer = createSwitchNavigator({
  AuthNavigator: AuthenticationNavigator,
  HomeNavigator: TabsNavigationContainer
})

export default createAppContainer(AppContainer)
