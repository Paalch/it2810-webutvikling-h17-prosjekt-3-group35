import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import CreateAppointment from "./CreateAppointment";
import AppointmentList from "./AppointmentList";
import './schedule.css';

const firstBy = require('thenby');


class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            showModal: false
        };
        this.handleCreateAppointment = this.handleCreateAppointment.bind(this);
        this.handleAppointment = this.handleAppointment.bind(this);
        this.openNewAppointment = this.openNewAppointment.bind(this);
        this.closeNewAppointment = this.closeNewAppointment.bind(this);
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

        const createAppointment =
            <Row>
                <CreateAppointment
                    appointments={this.state.appointments}
                    onCreateAppointment={this.handleCreateAppointment}
                    showModal={this.state.showModal}
                    closeNewAppointment={this.closeNewAppointment}/>
            </Row>;

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
                            {createAppointment}
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