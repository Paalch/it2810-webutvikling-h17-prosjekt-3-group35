import React, {Component} from 'react'
import {Col, Row, FormControl, Button, Modal, FormGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import TimePicker from 'rc-time-picker';

import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

const moment = require('moment');


class CreateAppointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      time: moment().set('minute', 0),
      details: '',
      label: '',
      color: '#337ab7'
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.createAppointment = this.createAppointment.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.setColor = this.setColor.bind(this);
    CreateAppointment.disabledMinutes = CreateAppointment.disabledMinutes.bind(this);
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

  setColor(c) {
    this.setState({color: c});
  }

  static disabledMinutes() {
    let minutes = [];
    for (let i = 1; i <= 60; i++) {
      if (i % 15 !== 0) {
        minutes.push(i);
      }
    }
    return minutes;
  }


  createAppointment() {
    const date = this.state.date.set('hour', this.state.time.get('hour')).set('minute', this.state.time.get('minute'));
    let appointment = {
      date: date,
      time: this.state.time,
      details: this.state.details,
      id: this.props.idCounter,
      color: this.state.color
    };

    this.props.onCreateAppointment(appointment);
    this.setState({details: '', color: '#337ab7', date: moment(), time: moment().set('minute', 0)});
    this.props.closeNewAppointment();
  };

  render() {
    return (
      <div>
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
                  minDate={moment()}
                />
              </Col>
              <Col xs={6}>
                <p>Time:</p>
                <TimePicker
                  showSecond={false}
                  defaultValue={moment().set('minute', 0)}
                  onChange={this.handleTimeChange}
                  disabledMinutes={CreateAppointment.disabledMinutes}
                  hideDisabledOptions={true}
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
                    onClick={() => this.setColor('#337ab7')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label2'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('#A25188')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label3'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('#447884')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label4'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('#CA6573')}/>
                </Col>
                <Col xs={2}>
                  <input
                    id={'label5'}
                    type={'radio'}
                    name={'radioGroup'}
                    className={'modal-label-picker'}
                    onClick={() => this.setColor('#7B498D')}/>
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