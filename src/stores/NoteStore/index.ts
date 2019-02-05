// Observable would be nice in capital letter, Actually all decorators will be like that(java behavior 🙂)
import { observable as Observable, action as Action } from 'mobx'

import uuid from 'uuid'

import Note from './Note'

class NoteMobxStore {
  @Observable notes: Note[] = []

  // add note or save note
  @Action
  addNote(note: Note) {
    const idx = this.notes.findIndex(n => n.noteId === note.noteId)
    if (idx < 0) {
      this.notes.push(note)
    } else {
      this.notes[idx] = note
    }
  }

  @Action
  deleteNote(noteId: string) {
    const idx = this.notes.findIndex(n => n.noteId === noteId)
    if (idx < 0) {
      throw new Error(`Note ${noteId} not found`)
    } else {
      this.notes.splice(idx, 1)
    }
  }

  @Action
  getNote(noteId: string): Note {
    const idx = this.notes.findIndex(n => n.noteId === noteId)
    if (idx < 0) {
      throw new Error(`note ${noteId} not found`)
    } else {
      return this.notes[idx]
    }
  }
}
const NoteStore = new NoteMobxStore()
/**
 * add placeholder data
 *
 */
const newNote = (title: string, content: string) => {
  NoteStore.addNote({
    noteId: uuid.v4(),
    content,
    title,
    createdAt: '' + Date.now(),
    updatedAt: '' + Date.now()
  })
}
newNote('First note', 'some content')
newNote('Second note', 'some content')
newNote('Third note', 'some content')
newNote('Fourth note', 'some content')
export default NoteStore
