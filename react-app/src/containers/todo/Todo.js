import React from 'react';
import { Row } from 'react-bootstrap'
import './todo.css';
import TodoList from "./TodoList";

class Todo extends React.Component {
  render () {
    return (
      <div className={'todo-container box'}>
        <Row className={'box-header'}>
          <h1>Todo</h1>
        </Row>
        <Row className={'box-body'}>
          <TodoList/>
        </Row>
      </div>
    )
  }
}

export default Todo;