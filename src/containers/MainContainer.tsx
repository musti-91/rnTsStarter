import React, { Component } from 'react'
import { NavigationInjectedProps } from 'react-navigation'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { inject as Inject, observer as Observer } from 'mobx-react/native'

import { globalStyles } from '@assets/globalStyles'
// import ListItems from '@components/LIstItems'
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
      <View style={container}>
        <Text style={txt} onPress={() => alert('Default behavior of no click component')} />
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
      </View>
    )
  }

  _onDeleteNote = (noteId: string) => {
    const { deleteNote } = this.props.store
    deleteNote(noteId)
  }
}

export default MainContainer
