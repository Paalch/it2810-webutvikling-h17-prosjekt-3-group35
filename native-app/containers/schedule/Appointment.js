import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: this.props.appointments
        };
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }

    deleteAppointment() {
        let appointments = this.state.appointments;
        for (let i = 0; i < appointments.length; i++) {
            if (appointments[i].includes(this.props.id)) {
                appointments.splice(i, 1);
                break;
            }
        }
        this.setState({
            appointments: appointments
        });

        this.props.receiveAppointment(this.state.appointments);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.appointments.length > 0) {
                let appointments = this.props.appointments;
                let appointments2 = this.props.appointments;
                for (let i = 0; i < appointments.length; i++) {
                    if (appointments[i][0].isBefore(moment().subtract(1, "hours"))) {
                        appointments2.splice(i, 1);
                    }
                }
                this.setState({
                    appointments: appointments2
                });
                this.props.receiveAppointment(this.state.appointments);
            }
        }, 60000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <View style={styles.container}>
                <label style={{backgroundColor: this.props.color}}>{this.props.time}</label>
                <label>{this.props.text}</label>
                <TouchableOpacity
                    onClick={this.deleteAppointment}
                    style={{backgroundColor: this.props.color, float: right}}>
                    X
                </TouchableOpacity>
            </View>
        );
    }
}
