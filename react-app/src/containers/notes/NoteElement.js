import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './notes.css';
import TextareaAutosize from 'react-autosize-textarea';


class NoteElement extends React.Component {

  render () {
    return (
      <div className={'inner-notes-container box'}>
        <Button
          onClick={() => this.props.deleteNote(this.props.note.id)}
          className={'remove-note'}>
          X
        </Button>
        <Row className={'notes box-body'}>
          <Col md={12}>
            <TextareaAutosize
              value={this.props.note.text}
              onChange={(event) => this.props.updateTextField(this.props.note.id, event.target.value)}
              id={this.props.note.id}
              className={"note-field"}
              maxRows={7}>
            </TextareaAutosize>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NoteElement;