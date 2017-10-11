import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import './schedule.css';
import CreateAppointment from "./CreateAppointment";
import AppointmentList from "./AppointmentList";


class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    };
    this.handleCreateAppointment = this.handleCreateAppointment.bind(this);
    this.handleAppointment = this.handleAppointment.bind(this)
  }

  handleCreateAppointment(appointments) {
    this.setState({
      appointments: appointments
    });
  }

  handleAppointment(appointments) {
    this.setState({
      appointments: appointments
    });
  }

  render() {
    console.log("Sche " + this.state.appointments);
    return (
      <div>
        <div className={'schedule-container box'}>
          <Row className={'box-header schedule-header'}>
            <h1>Schedule</h1>
          </Row>
          <Row>
            <AppointmentList appointments={this.state.appointments}
                             onAppointments={this.handleAppointment}/>
          </Row>
          <Row className={'box-body'}>
            <CreateAppointment appointments={this.state.appointments}
                               onCreateAppointment={this.handleCreateAppointment}/>
          </Row>
        </div>
      </div>
    )
  }
}

export default Schedule;