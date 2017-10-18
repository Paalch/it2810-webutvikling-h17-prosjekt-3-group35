import React, {Component} from 'react';


class TodoElement extends Component {

  render() {
    return (
      <div className={'todo-element'}>
        <input
          className={'checkbox-round'}
          type={'checkbox'}
          checked={''}
          onClick={() => this.props.removeElement(this.props.todo.id)}/>
        <label>{this.props.todo.value}</label>
      </div>
    )
  }
}

TodoElement.propTypes = {

};

export default TodoElement;