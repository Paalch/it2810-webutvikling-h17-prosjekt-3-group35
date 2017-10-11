import React from 'react';
import { Button } from 'react-bootstrap'
import './notes.css'
import NoteElement from "./NoteElement";
import { Row, Col } from 'react-bootstrap';

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
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
  }

  save() {
    localStorage.setItem('notes', JSON.stringify(this.state));
  }

  load() {
    localStorage.getItem('notes');
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
      <div className={'notes-container box'}>
        <Row className={'notes-header box-header'}>
          <Col xs={7} style={{paddingLeft: '0px'}}>
            <h1>Notes</h1>
          </Col>
          <Col xs={5}>
            <Button
              bsStyle={'warning'}
              onClick={this.addNewNote}
              className={'new-note-button'}>
              + New note
            </Button>
          </Col>
        </Row>
        <Row className={'notes-body box-body'}>
          <div>
          { content }
          </div>
        </Row>
      </div>
    )
  }
}

export default Notes;