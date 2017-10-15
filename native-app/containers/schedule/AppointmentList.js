import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from "./Appointment";

export default class AppointmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: this.props.appointments
        };
        this.receiveAppointment = this.receiveAppointment.bind(this);
    }

    receiveAppointment(appointments) {
        this.state = {
            appointments: appointments
        };
        this.props.onAppointments(this.state.appointments);
    }

    render() {
        const appointments = (this.state.appointments).sort((a, b) => a[0].isAfter(b[0])).map((apps, i) =>
            <Appointment
                content={apps}
                text={apps[2]} moment={apps[2]} key={i} id={apps[3]}
                time={apps[0].format("DD.MM.YYYY") + " " + apps[1].format("HH:mm")} color={apps[4]}
                appointments={this.state.appointments}
                receiveAppointment={this.receiveAppointment}/>);
        return (
            <View>
                <View>
                    {appointments}
                </View>
            </View>
        );
    }
}

