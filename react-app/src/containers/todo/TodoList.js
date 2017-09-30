import React, { Component } from 'react';
import { Col, Row, FormControl, Button, Checkbox } from 'react-bootstrap';

class TodoList extends Component {

  saveTodo() {
    const todoValue = document.getElementById('todo-form-input').value;
    if (todoValue.length === 0) {
      return;
    }

    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-element';
    todoDiv.id = todoValue;

    const todo = document.createElement('input');
    todo.type = 'checkbox';
    todo.value = todoValue;

    const label = document.createElement('label');
    label.appendChild(document.createTextNode(todoValue));

    todoDiv.appendChild(todo);
    todoDiv.appendChild(label);

    document.getElementById('todos').appendChild(todoDiv);
    document.getElementById('todo-form-input').value = '';
  };

  render() {
    return (
      <div>
        <Row>
          <Col md={10} xs={9}>
            <FormControl
              id = 'todo-form-input'
              type='text'
              placeholder='Todo...'
            />
          </Col>
          <Col md={2} xs={3}>
            <Button className={'todo-add-button'} bsStyle={'primary'} onClick={this.saveTodo}>+</Button>
          </Col>
        </Row>
        <div id={'todos'}>

        </div>
      </div>
    )
  }
}

export default TodoList;