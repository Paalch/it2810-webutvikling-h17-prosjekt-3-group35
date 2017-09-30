import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import './notes.css'
import TextareaAutosize from 'react-autosize-textarea';


class Notes extends React.Component {

    reset(){
        document.getElementById("note").value = "";

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
            <Col md={12}>
                <TextareaAutosize id={"note"}className={"note-field"} maxRows={5} placeholder={"Personal notes"}></TextareaAutosize>
            </Col>
            <Col lg={8} mdOffset={2}>
                <Button bsStyle="warning" id="deleteBtn" block onClick={this.reset}>Delete Note</Button>
            </Col>
        </Row>
      </div>
    )
  }
}

export default Notes;