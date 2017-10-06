import React, {Component} from 'react';
import './bottomNav.css';
import {Row, Col} from 'react-bootstrap';


export class BottomNav extends React.Component {

  render() {
    return (
      <Col>
        <div className={'nav-container'}>
          <Row className={'item-container'}>
            <Col xs={4} id={'schedule'} onClick={this.props.openSchedule}>Schedule</Col>
            <Col xs={4} id={'todo'} onClick={this.props.openTodo}>2do</Col>
            <Col xs={4} id={'notes'} onClick={this.props.openNotes}>Notes</Col>
          </Row>
        </div>
      </Col>
    );
  }

}

export default BottomNav;