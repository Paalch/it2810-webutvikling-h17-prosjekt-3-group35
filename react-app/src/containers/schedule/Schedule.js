import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import CreateAppointment from "./CreateAppointment";
import AppointmentList from "./AppointmentList";
import './schedule.css';

const moment = require('moment');


class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      idCounter: 0,
      showModal: false
    };

    Schedule.load = Schedule.load.bind(this);
    this.save = this.save.bind(this);
    this.handleCreateAppointment = this.handleCreateAppointment.bind(this);
    this.handleDeleteAppointment = this.handleDeleteAppointment.bind(this);
    this.openNewAppointment = this.openNewAppointment.bind(this);
    this.closeNewAppointment = this.closeNewAppointment.bind(this);
  }

  componentDidMount() {
    const data = Schedule.load();
    data.appointments.forEach(function (a) {
      a.date = moment(a.date);
      a.time = moment(a.time);
    });
    if (data !== null) {
      this.setState(() => data);
    }
  }

  componentDidUpdate() {
    this.save();
  }

  save() {
    localStorage.setItem('schedule', JSON.stringify(this.state));
  }

  static load() {
    return 'schedule' in localStorage ?
      JSON.parse(localStorage.getItem('schedule')) : null;
  }

  handleCreateAppointment(appointment) {
    const newAppoinments = this.state.appointments.slice();
    newAppoinments.push(appointment);
    this.setState({
      appointments: newAppoinments,
      idCounter: this.state.idCounter+1
    });
  }

  handleDeleteAppointment(appointments) {
    this.setState({
      appointments: appointments
    });
  }

  openNewAppointment() {
    this.setState({showModal: true});
  }

  closeNewAppointment() {
    this.setState({showModal: false});
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
              <Button
                bsStyle={'primary'}
                className={'schedule-button'}
                onClick={this.openNewAppointment}>
                + New schedule
              </Button>
            </Col>
          </Row>
          <Row className={'box-body'}>
            <Col>
              <Row>
                <CreateAppointment
                  onCreateAppointment={this.handleCreateAppointment}
                  idCounter={this.state.idCounter}
                  showModal={this.state.showModal}
                  closeNewAppointment={this.closeNewAppointment}/>
              </Row>
              <AppointmentList
                appointments={this.state.appointments}
                onDeleteAppointment={this.handleDeleteAppointment}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Schedule;