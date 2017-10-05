import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import './notes.css'
import TextareaAutosize from 'react-autosize-textarea';


class Notes extends React.Component {

  constructor() {
    super();
    this.state = {
      note: ''
    };
    this.updateTextField = this.updateTextField.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateTextField (e) {
    this.setState({note: e.target.value});
  }

  reset (e) {
    this.setState({note: ''});
  }

  render () {
    return (
      <div className={'notes-container box'}>
        <Row className={'notes box-header'}>
          <h1>Notes</h1>
        </Row>
        <Row className={'notes box-body'}>
          <Col md={12}>
            <TextareaAutosize onChange={this.updateTextField} value={this.state.note} id={"note"} className={"note-field"} maxRows={7} placeholder={'.............'}></TextareaAutosize>
          </Col>
          <Col md={4} mdOffset={8} sm={5} smOffset={7} xs={5} xsOffset={7}>
            <Button bsStyle={'warning'} bsSize={'xs'} id="deleteBtn" block onClick={this.reset}>Erease</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Notes;