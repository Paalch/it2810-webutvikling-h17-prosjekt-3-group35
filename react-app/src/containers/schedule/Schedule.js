import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap'

import './schedule.css';
import CreateAppointment from "./CreateAppointment";


class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openCreateAppointment: false
        };
        this.openCreateAppointment = this.openCreateAppointment.bind(this);
    }

    openCreateAppointment() {
        this.setState({openCreateAppointment: !this.state.openCreateAppointment});
    }

    render() {
        let newBox = null;
        if (this.state.openCreateAppointment) {
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
                            onClick={this.openCreateAppointment}
                        >Create appointment
                        </button>
                    </Row>
                    {newBox}
                </div>
            </div>

        )
    }
}

export default Schedule;