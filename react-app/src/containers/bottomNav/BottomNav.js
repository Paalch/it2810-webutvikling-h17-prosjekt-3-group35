import React, { Component } from 'react';
import './bottomNav.css';
import {Row, Col} from 'react-bootstrap';


export class BottomNav extends Component {

  render() {
    return (
      <Row className={'nav-container'}>
        <Col xs={4} id={'schedule'} className={'nav-item'} onClick={this.props.openSchedule}>Schedule</Col>
        <Col xs={4} id={'todo'} className={'nav-item'} onClick={this.props.openTodo}>2do</Col>
        <Col xs={4} id={'notes'} className={'nav-item'} onClick={this.props.openNotes}>Notes</Col>
      </Row>
    );
  }

}

export default BottomNav;