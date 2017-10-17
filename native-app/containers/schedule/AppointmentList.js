import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from "./Appointment";
import moment from 'moment';


export default class AppointmentList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }

    deleteAppointment(id) {
        const appointments = this.props.appointments.slice().filter((a) => a.id !== id);
        this.props.onDeleteAppointment(appointments);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const appointments = this.props.appointments.slice().filter((a) => a.date.isAfter(moment().subtract(1, "hours")));
            this.props.onDeleteAppointment(appointments);

        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const appointments = this.props.appointments.sort((a, b) => a.date.isAfter(b.date)).map((appointment, i) =>
            <Appointment
                key={i}
                appointment={appointment}
                text={appointment.details}
                id={appointment.id}
                time={appointment.date.format("DD.MM.YYYY") + " " + appointment.time.format("HH:mm")}
                color={appointment.color}
                appointments={appointments}
                deleteAppointment={this.deleteAppointment}
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

