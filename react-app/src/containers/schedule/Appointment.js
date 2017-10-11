import React, {Component} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import "./schedule.css"


class Appointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  deleteAppointment() {
    let appointments = this.state.appointments;
    for (let i = 0; i < appointments.length; i++) {

      if (appointments[i].includes(this.props.id)) {
        appointments.splice(i, 1);
      }
    }
    this.setState({
      appointments: appointments
    });

    this.props.receiveAppointment(this.state.appointments);
  }


  render() {
    return (
      <div className={'appointment-container'}>
        <Row>
          <Col>
            <Button onClick={this.deleteAppointment}>X</Button>
          </Col>
          <Col>
            <label>{this.props.text}</label>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Appointment;