import React from 'react';
import {Row, Col} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Timepicker from 'react-timepicker'
import moment from 'moment'

import './schedule.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class Schedule extends React.Component {

    constructor() {
        super();
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        return (
            <div className={'schedule-container box'}>
                <Row className={'box-header'}>
                    <h1>Schedule</h1>
                </Row>
                <Row className={'box-body'}>
                    <p>
                        <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        />
                        <Timepicker/>
                    </p>
                </Row>
            </div>
        )
    }
}

export default Schedule;