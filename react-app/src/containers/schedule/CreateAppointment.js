import React, {Component, PropTypes} from 'react'
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
            details: "",
            label: ""
        };
        this.handleDateChange = this.handleDateChange.bind(this);
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

    createAppointment() {

    }

    render() {
        return (
            <div className={'appointment-container'}>
                <Row>
                    <Col xs={5}>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleDateChange}
                        />
                    </Col>
                    <Col xs={5}>
                        <TimePicker
                            showSecond={false}
                            defaultValue={this.state.time}
                            onChange={this.handleTimeChange}
                        />
                    </Col>
                    <Col xs={2}>
                        <button>create</button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CreateAppointment;