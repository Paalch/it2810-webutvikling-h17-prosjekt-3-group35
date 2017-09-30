import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './notes.css'

class Notes extends React.Component {
  render () {
    return (
      <div className={'notes-container box'}>
        <link  href="http://fonts.googleapis.com/css?family=Reenie+Beanie:regular"
               rel="stylesheet"
               type="text/css"/>
        <Row className={'notes-box-header'}>
          <h1>Notes</h1>
        </Row>
        <Row className={'notes-box-body'}>
          <p>Lorem ipsum</p>
            <textarea className="notePad" rows="9" cols="40">Here you can write very personal notes</textarea>
            <button>Delete Note</button>
        </Row>
      </div>
    )
  }
}

export default Notes;