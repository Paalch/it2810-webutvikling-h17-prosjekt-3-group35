import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Appointment extends React.Component {
    render() {
        return (
            <View className={'appointment-container'} style={{backgroundColor: this.props.color}}>
                <label className={"appointment-content"}>{this.props.time}</label>
                <label>{this.props.text}</label>
                <Button
                    className={"delete-appointment"}
                    onPress={() => this.props.deleteAppointment(this.props.appointment.id)}
                    style={{backgroundColor: this.props.color}}
                    Title="X"/>

            </View>
        );
    }
}
