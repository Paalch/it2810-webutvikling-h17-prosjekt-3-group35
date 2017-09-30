import React, {Component} from 'react';
import {Col, Row, FormControl, Button} from 'react-bootstrap';
import TodoElement from "./TodoElement";

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
          <Col md={10} xs={9}>
            <FormControl
              id={'todo-form-input'}
              type={'text'}
              placeholder={'Todo...'}
              value={this.state.text}
              onChange={this.updateTextField}
            />
          </Col>
          <Col md={2} xs={3}>
            <Button
              className={'todo-add-button'}
              bsStyle={'primary'}
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