import React, {Component} from 'react';
import {Col, Row, FormControl, Button} from 'react-bootstrap';
import TodoElement from "./TodoElement";
import './todo.css';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      text: ''
    }
    this.updateTextField = this.updateTextField.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  updateTextField(e) {
    this.setState({text: e.target.value});
  }

  removeElement(todo) {
    this.setState({
      todos: this.state.todos.filter((t) =>
        t !== todo
      )
    });
  }

  saveTodo() {
    const todoValue = this.state.text;
    if (todoValue.length === 0) {
      return;
    }
    this.setState({todos: this.state.todos.concat(todoValue), text: ''});
  };

  render() {
    const content = this.state.todos.map((todo, i) =>
      <TodoElement text={todo} key={i} removeElement={this.removeElement}/>
    );

    return (
      <div>
        <Row>
          <Col xs={10}>
            <FormControl
              id={'todo-form-input'}
              type={'text'}
              placeholder={'.............................................................'}
              value={this.state.text}
              onChange={this.updateTextField}
            />
          </Col>
          <Col xs={2}>
            <Button
              className={'todo-add-button'}
              onClick={this.saveTodo}>
              +
            </Button>
          </Col>
        </Row>
        <div id={'todos'}>
          {content}
        </div>
      </div>
    )
  }
}

export default TodoList;