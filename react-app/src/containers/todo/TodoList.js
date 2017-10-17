import React, {Component} from 'react';
import {Col, Row, FormControl, Button, FormGroup, InputGroup} from 'react-bootstrap';
import TodoElement from "./TodoElement";
import './todo.css';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      text: ''
    };
    this.updateTextField = this.updateTextField.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    const data = this.load();
    if (data !== null) {
      this.setState(() => data);
    }
  }

  componentDidUpdate() {
    this.save();
  }

  save() {
    localStorage.setItem('todo', JSON.stringify(this.state));
  }

  load() {
    return 'todo' in localStorage ?
      JSON.parse(localStorage.getItem('todo')) : null;
  }

  updateTextField(e) {
    this.setState({text: e.target.value});
  }

  removeElement(id) {
    this.setState({
      todos: this.state.todos.filter((t) =>
        id !== t.id
      )
    });
  }

  saveTodo() {
    const todoValue = this.state.text;
    if (todoValue.length === 0) {
      return;
    }
    const newTodo = {id: Date.now(), value: todoValue};
    this.setState({todos: this.state.todos.concat(newTodo), text: ''});
  };

  render() {
    const content = this.state.todos.map((element, i) =>
      <TodoElement todo={element} key={i} removeElement={this.removeElement}/>
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