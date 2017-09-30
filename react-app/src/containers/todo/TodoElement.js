import React, {Component} from 'react';

class TodoElement extends Component {

  render() {
    return (
      <div className={'todo-element'}>
        <input
          type={'checkbox'}
          onClick={() => this.props.removeElement(this.props.text)}/>
        <label>{this.props.text}</label>
      </div>
    )
  }
}

export default TodoElement;