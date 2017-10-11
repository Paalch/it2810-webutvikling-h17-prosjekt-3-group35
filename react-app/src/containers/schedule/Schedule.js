import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import CreateAppointment from "./CreateAppointment";
import AppointmentList from "./AppointmentList";
import './schedule.css';


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
    return (
      <div>
        <div className={'schedule-container box'}>
          <Row className={'box-header schedule-header'}>
            <Col xs={7} sm={8} md={9} style={{paddingLeft: '0px'}}>
              <h1>Schedule</h1>
            </Col>
            <Col xs={5} sm={4} md={3}>
              <Button bsStyle={'primary'} className={'schedule-button'}>+ New schedule</Button>
            </Col>
          </Row>
          <Row className={'box-body'}>
            <Row>
              <CreateAppointment
                appointments={this.state.appointments}
                onCreateAppointment={this.handleCreateAppointment}/>
            </Row>
            <Row>
              <AppointmentList
                appointments={this.state.appointments}
                onAppointments={this.handleAppointment}/>
            </Row>
          </Row>
        </div>
      </div>
    )
  }
}

export default Schedule;