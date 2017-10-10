import React, {Component} from 'react'
import {Col, Row, FormControl, Button} from 'react-bootstrap'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import TimePicker from 'rc-time-picker';


import './appointment.css'
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
            appointments: this.props.appointments
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.createAppointment = this.createAppointment.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
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


    createAppointment() {
        let appointments = this.state.appointments;

        let iDate = this.state.date.format("DD.MM.YYYY");
        let iTime = this.state.time.format("HH:mm");

        let dateAndTime = moment(iDate + " " + iTime);

        let id = this.state.idCounter;

        appointments.push([
            this.state.date.format("DD.MM.YYYY") + " " +
            this.state.time.format("HH:mm") + " "
            + this.state.details,
            dateAndTime,
            id]);
        this.setState({
            appointments: appointments,
            idCounter: this.state.idCounter + 1
        });
        this.props.onCreateAppointment(this.state.appointments);
    };

    render() {
        console.log("Crea " + this.state.appointments);

        return (
            <div className={'appointment-container'}>
                <Row>
                    <Col xs={3}>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleDateChange}
                            dateFormat={"DD.MM.YYYY"}
                        />
                    </Col>
                    <Col xs={3}>
                        <TimePicker
                            showSecond={false}
                            defaultValue={this.state.time}
                            onChange={this.handleTimeChange}
                        />
                    </Col>
                    <Col xs={4}>
                        <FormControl
                            type={'text'}
                            placeholder={''}
                            value={this.state.details}
                            onChange={this.updateDetails}
                        />
                    </Col>
                    <Col xs={1}>
                        <Button
                            onClick={this.createAppointment}
                        >create</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CreateAppointment;