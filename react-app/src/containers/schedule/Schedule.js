import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './schedule.css';

class Schedule extends React.Component {
  render () {
    return (
      <div className={'schedule-container box'}>
        <Row className={'box-header'}>
          <h1>Schedule</h1>
        </Row>
        <Row className={'box-body'}>
          <p>Lorem ipsum</p>
        </Row>
      </div>
    )
  }
}

export default Schedule;