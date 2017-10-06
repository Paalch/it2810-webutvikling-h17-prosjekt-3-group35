import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoElement extends Component {

  render() {
    return (
      <div className={'todo-element'}>
        <input
          className={'checkbox-round'}
          type={'checkbox'}
          onClick={() => this.props.removeElement(this.props.text)}/>
        <label>{this.props.text}</label>
      </div>
    )
  }
}

TodoElement.propTypes = {
  text: PropTypes.string.isRequired
};

export default TodoElement;