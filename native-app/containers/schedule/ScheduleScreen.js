import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, AsyncStorage } from 'react-native';
import CreateAppointment from "./CreateAppointment";
import AppointmentList from "./AppointmentList";

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
            showModal: false
        };
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
        this.handleCreateAppointment = this.handleCreateAppointment.bind(this);
        this.handleAppointment = this.handleAppointment.bind(this);
        this.openNewAppointment = this.openNewAppointment.bind(this);
        this.closeNewAppointment = this.closeNewAppointment.bind(this);
    }

    componentDidMount() {
        const data = this.load();
        if (data !== null) {
            this.setState(() => data);
        }
    }

    componentDidUpdate() {
        this.save();
    }

    save() {
        AsyncStorage.setItem('schedule', JSON.stringify(this.state));
    }

    load() {
        return 'schedule' in AsyncStorage ?
            JSON.parse(AsyncStorage.getItem('schedule')) : null;
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
        return (
            <View style={styles.container}>
                <ScrollView>
                    <CreateAppointment
                         appointments={this.state.appointments}
                         onCreateAppointment={this.handleCreateAppointment}
                         showModal={this.state.showModal}
                         closeNewAppointment={this.closeNewAppointment}/>
                    <AppointmentList
                         appointments={this.state.appointments}
                         onAppointments={this.handleAppointment}/>
                </ScrollView>
                <Button onPress={this.openNewAppointment} title={"+ New schedule"} color={"#666"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222b34",
        padding: 10,
    },
});
