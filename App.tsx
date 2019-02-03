/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin
 * 93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import AppNavigationContainer from '@navigations/index'

import NoteStore from '@stores/NoteStore/index'

interface IProps {}
export default class App extends Component<IProps> {
  render() {
    return (
      <Provider store={NoteStore}>
        <AppNavigationContainer />
      </Provider>
    )
  }
}
