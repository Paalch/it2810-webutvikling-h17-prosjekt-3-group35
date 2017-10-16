import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import "./schedule.css"

class Appointment extends Component {
  render() {
    return (
      <div className={'appointment-container'} style={{backgroundColor: this.props.color}}>
        <label className={"appointment-content"}>{this.props.time}</label>
        <label>{this.props.text}</label>
        <Button
          className={"delete-appointment"}
          onClick={() => this.props.deleteAppointment(this.props.appointment.id)}
          style={{backgroundColor: this.props.color}}>
          X
        </Button>
      </div>
    );
  }
}

export default Appointment;