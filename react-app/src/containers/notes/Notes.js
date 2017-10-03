import React from 'react';
import { Button } from 'react-bootstrap'
import './notes.css'
import NoteElement from "./NoteElement";

class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      currentKeyCounter: 0
    }
    this.addNewNote = this.addNewNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateTextField = this.updateTextField.bind(this);
  }

  addNewNote() {
    this.setState({
      notes: this.state.notes.concat({id: this.state.currentKeyCounter, text: ''}),
      currentKeyCounter: this.state.currentKeyCounter + 1
    });
  }

  deleteNote(index) {
    const tempNotes = this.state.notes.filter(n => n.id !== index);
    this.setState({notes: tempNotes,currentKeyCounter: this.state.currentKeyCounter});
  }

  updateTextField(index, text) {
    const tempNotes = this.state.notes;
    tempNotes.forEach((note) => {
      if(note.id === index) {
        note.text = text;
      }
    });
    this.setState({notes: tempNotes, currentKeyCounter: this.state.currentKeyCounter})

  }

  render () {
    const content = this.state.notes.map((note, i) =>
      <NoteElement key={i} note={note} updateTextField={this.updateTextField} deleteNote={this.deleteNote}/>
    );

    return (
      <div>
        <Button bsStyle={'warning'} onClick={this.addNewNote}>+ new note</Button>
        <div>
          { content }
        </div>
      </div>
    )
  }
}

export default Notes;