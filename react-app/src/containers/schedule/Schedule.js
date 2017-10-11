import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import CreateAppointment from "./CreateAppointment";
import AppointmentList from "./AppointmentList";
import './schedule.css';


class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      showModal: false
    };
    this.load = this.load.bind(this);
    this.save = this.save.bind(this);
    this.handleCreateAppointment = this.handleCreateAppointment.bind(this);
    this.handleAppointment = this.handleAppointment.bind(this);
    this.openNewAppointment = this.openNewAppointment.bind(this);
    this.closeNewAppointment = this.closeNewAppointment.bind(this);
  }

  componentDidMount() {
    const data = this.load();
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

  load() {
    return 'schedule' in localStorage ?
      JSON.parse(localStorage.getItem('schedule')) : null;
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
                  appointments={this.state.appointments}
                  onCreateAppointment={this.handleCreateAppointment}
                  showModal={this.state.showModal}
                  closeNewAppointment={this.closeNewAppointment}/>
              </Row>
              <AppointmentList
                appointments={this.state.appointments}
                onAppointments={this.handleAppointment}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Schedule;