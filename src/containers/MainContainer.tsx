import React, { Component } from 'react'
import { NavigationInjectedProps, SafeAreaView } from 'react-navigation'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { inject as Inject, observer as Observer } from 'mobx-react'

// translations
import i18n from '@i18n/index'

import { globalStyles } from '@assets/globalStyles'
interface IProps extends NavigationInjectedProps {
  // just for fun
  // you already have access to Navigation props
  color: string | 'red'
  store: any
}

@Inject('store')
@Observer
class MainContainer extends Component<IProps> {
  render() {
    const { container, txt } = globalStyles
    const { notes } = this.props.store
    return (
      <SafeAreaView style={container}>
        <Text style={txt} onPress={() => alert('Default behavior of no click component')}>
          {i18n.t('greetings')}
        </Text>
        {/* <ListItems list={notes} deleteItem={this._onDeleteNote} /> */}
        {notes.map((note: any) => (
          <TouchableWithoutFeedback
            key={note.noteId}
            onPress={() => this._onDeleteNote(note.noteId)}>
            <View>
              <Text>{note.title}</Text>
              <Text>{note.content}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </SafeAreaView>
    )
  }

  _onDeleteNote = (noteId: string) => {
    const { deleteNote } = this.props.store
    deleteNote(noteId)
  }
}

export default MainContainer
