import React, {Component} from 'react'
import {Col, Row, FormControl, Button, Modal, FormGroup } from 'react-bootstrap'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import TimePicker from 'rc-time-picker';

import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';


class CreateAppointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      time: moment(),
      details: '',
      label: '',
      idCounter: 0,
      appointments: this.props.appointments,
      color: 'blue'
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.createAppointment = this.createAppointment.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      date: date
    });
  }

  handleTimeChange(time) {
    this.setState({
      time: time
    });
  }

  updateDetails(details) {
    this.setState({
      details: details.target.value
    });
  }

  setColor(e) {
    console.log(e);
  }


  createAppointment() {
    let appointments = this.state.appointments;

    let iDate = this.state.date.format("DD.MM.YYYY");
    let iTime = this.state.time.format("HH:mm");

    let dateAndTime = moment(iDate + " " + iTime);

    let id = this.state.idCounter;

    appointments.push([
      this.state.date.format("DD.MM.YYYY") + " " +
      this.state.time.format("HH:mm")
      ,this.state.details,
      dateAndTime,
      id]);
    this.setState({
      appointments: appointments,
      idCounter: this.state.idCounter + 1
    });
    this.props.onCreateAppointment(this.state.appointments);
    this.setState({details: ''});
    this.props.closeNewAppointment();
  };

  render() {
    return (
      <div className={'appointment-container'}>
        <Modal show={this.props.showModal} onHide={this.props.closeNewAppointment}>
          <Modal.Header closeButton>
            <Modal.Title>Create new event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className={'modal-row'}>
              <Col xs={6}>
                <p>Date:</p>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.handleDateChange}
                  dateFormat={"DD.MM.YYYY"}
                />
              </Col>
              <Col xs={6}>
                <p>Time:</p>
                <TimePicker
                  showSecond={false}
                  defaultValue={this.state.time}
                  onChange={this.handleTimeChange}
                />
              </Col>
            </Row>
            <Row className={'modal-row'}>
              <Col xs={12}>
                <p>Label:</p>
              </Col>
              <FormGroup>
                <Col xs={2}>
                  <input
                    id={'label1'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label2'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label3'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label4'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label5'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('')}/>
                </Col>
              </FormGroup>
            </Row>
            <Row className={'modal-row'}>
              <Col xs={12}>
                <p>Schedule description:</p>
              </Col>
              <Col sm={9}>
                <FormControl
                  type={'text'}
                  placeholder={''}
                  value={this.state.details}
                  onChange={this.updateDetails}
                />
              </Col>
              <Col sm={3} xs={6}>
                <Button
                  onClick={this.createAppointment}
                  bsStyle={'primary'}
                  className={'modal-schedule-button'}>
                  Schedule event
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default CreateAppointment;