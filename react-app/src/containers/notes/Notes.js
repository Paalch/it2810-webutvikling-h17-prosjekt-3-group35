import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './notes.css'

class Notes extends React.Component {

    reset(){
        document.getElementById("note").value = null;

    }



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
          <p>Welcome to note</p>
            <textarea id="note" className="notePad" rows="9" cols="40" placeholder="Write your personal notes here"></textarea>
            <button id="deleteBtn" onClick={this.reset}>Delete Note</button>
        </Row>
      </div>
    )
  }
}

export default Notes;