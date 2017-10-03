import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap'

import './schedule.css';
import CreateAppointment from "./CreateAppointment";


class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            newAppointmentStart: false,
        };
        this.createAppointment = this.createAppointment.bind(this);
    }

    createAppointment() {
        this.setState({newAppointmentStart: !this.state.newAppointmentStart});
    }

    render() {
        let newBox = null;
        if (this.state.newAppointmentStart) {
            newBox = <CreateAppointment/>;
        }
        return (
            <div>

                <div className={'schedule-container box'}>
                    <Row className={'box-header'}>
                        <h1>Schedule</h1>
                    </Row>
                    <Row className={'box-body'}>
                        <button
                            onClick={this.createAppointment}
                        >Create appointment
                        </button>
                    </Row>
                    {newBox}
                </div>
                <div>
                </div>
            </div>

        )
    }
}

export default Schedule;