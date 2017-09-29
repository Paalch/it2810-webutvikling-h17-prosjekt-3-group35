import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './notes.css'

class Notes extends React.Component {
  render () {
    return (
      <div className={'notes-container box'}>
        <Row className={'box-header'}>
          <h1>Notes</h1>
        </Row>
        <Row className={'box-body'}>
          <p>Lorem ipsum</p>
        </Row>
      </div>
    )
  }
}

export default Notes;