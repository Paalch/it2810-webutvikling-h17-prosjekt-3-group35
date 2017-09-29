import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './todo.css';

class Todo extends React.Component {
  render () {
    return (
      <div className={'todo-container box'}>
        <Row className={'box-header'}>
          <h1>2do</h1>
        </Row>
        <Row className={'box-body'}>
          <p>Lorem ipsum</p>
        </Row>
      </div>
    )
  }
}

export default Todo;