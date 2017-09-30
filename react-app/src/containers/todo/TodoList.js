import React, { Component } from 'react';
import { FormControl, Button, Col, Row } from 'react-bootstrap';

class TodoForm extends Component {

  saveTodo() {

  };

  render() {
    return (
      <Row>
        <Col md={10}>
          <FormControl
            type='text'
            placeholder='Todo...'
          />
        </Col>
        <Col md={2} className={'add-todo-button'}>
          <Button bsStyle={'primary'} onClick={this.saveTodo}>+</Button>
        </Col>
      </Row>
    )
  }
}

export default TodoForm;