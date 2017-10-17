import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, AsyncStorage } from 'react-native';
import CreateAppointment from "./CreateAppointment";
import AppointmentList from "./AppointmentList";
import moment from 'moment';

export default class ScheduleScreen extends React.Component {
    static navigationOptions = {
        title: 'Schedule',
        headerStyle: { backgroundColor: '#1c588c', elevation: 6, paddingTop: 6,},
        headerTitleStyle: { color: '#fff',},
        headerTintColor: '#fff'
    };

    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            idCounter: 0,
            showModal: false
        };

        ScheduleScreen.load = ScheduleScreen.load.bind(this);
        this.save = this.save.bind(this);
        this.handleCreateAppointment = this.handleCreateAppointment.bind(this);
        this.handleDeleteAppointment = this.handleDeleteAppointment.bind(this);
        this.openNewAppointment = this.openNewAppointment.bind(this);
        this.closeNewAppointment = this.closeNewAppointment.bind(this);
    }

    componentDidMount() {
        const data = ScheduleScreen.load();
        if (data !== null) {
            data.appointments.forEach(function (a) {
                a.date = moment(a.date);
                a.time = moment(a.time);
            });
            this.setState(() => data);
        }
    }

    componentDidUpdate() {
        this.save();
    }

    save() {
        AsyncStorage.setItem('schedule', JSON.stringify(this.state));
    }

    static load() {
        return 'schedule' in AsyncStorage ?
            JSON.parse(AsyncStorage.getItem('schedule')) : null;
    }

    handleCreateAppointment(appointment) {
        const newAppointments = this.state.appointments.slice();
        newAppointments.push(appointment);
        this.setState({
            appointments: newAppointments,
            idCounter: this.state.idCounter+1
        });
    }

    handleDeleteAppointment(appointments) {
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
        return (
            <View>
                <View className={'schedule-container box'}>
                    <View className={'box-header schedule-header'}>
                        <View>
                            <Text>Schedule</Text>
                        </View>
                        <View>
                            <Button
                                className={'schedule-button'}
                                onPress={this.openNewAppointment}
                                title="+ New Schedule"/>
                        </View>
                    </View>
                    <View className={'box-body'}>
                        <View>
                            <View>
                                <CreateAppointment
                                    onCreateAppointment={this.handleCreateAppointment}
                                    idCounter={this.state.idCounter}
                                    showModal={this.state.showModal}
                                    closeNewAppointment={this.closeNewAppointment}/>
                            </View>
                            <AppointmentList
                                appointments={this.state.appointments}
                                onDeleteAppointment={this.handleDeleteAppointment}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222b34",
        padding: 10,
    },
});
