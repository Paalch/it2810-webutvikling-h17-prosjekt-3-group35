import React, {Component} from 'react'
import {Row, Col, Button, Panel} from 'react-bootstrap'
import "./schedule.css"

class Appointment extends Component {
  render() {
    const header =
      <div>
        <Row>
          <Col xs={8}>
            <p>{this.props.time}</p>
          </Col>
          <Col xs={4}>
            <Button
              className={"delete-appointment"}
              onClick={() => this.props.deleteAppointment(this.props.appointment.id)}
              bsStyle={'link'}>
              X
            </Button>
          </Col>
        </Row>
      </div>
    return (
      <div className={'appointment-container'}>
        <Panel header={header} bsStyle={this.props.style}>
          {this.props.text}
        </Panel>
      </div>
    );
  }
}

export default Appointment;