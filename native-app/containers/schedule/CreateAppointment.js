import React from 'react';
import { StyleSheet, Text, View, TextInput, Form, Button, DatePickerAndroid, TimePickerAndroid, Modal } from 'react-native';
import moment from 'moment'

export default class CreateAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            time: moment().set('minute', 0),
            details: '',
            label: '',
            idCounter: 0,
            appointments: this.props.appointments,
            color: '#337ab7'
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.createAppointment = this.createAppointment.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
        this.setColor = this.setColor.bind(this);
        this.disabledMinutes = this.disabledMinutes.bind(this);
    }

    handleDateChange(date) {
        this.setState({
            date: date
        });
    }

    handleTimeChange(time) {
        this.setState({
            time: time
        });
    }

    updateDetails(details) {
        this.setState({
            details: details.target.value
        });
    }

    setColor(c) {
        this.setState({color: c});
    }

    disabledMinutes() {
        let minutes = [];
        for (let i = 1; i <= 60; i++) {
            if (i % 15 !== 0) {
                minutes.push(i);
            }
        }
        return minutes;
    }
    

    createAppointment() {
        let appointments = this.state.appointments;

        let id = this.state.idCounter;
        let color = this.state.color;

        appointments.push([
            this.state.date,
            this.state.time,
            this.state.details,
            id,
            color]);

        this.setState({
            appointments: appointments,
            idCounter: this.state.idCounter + 1
        });
        this.props.onCreateAppointment(this.state.appointments);
        this.setState({details: '', color: '#337ab7', date: moment(), time: moment().set('minute', 0)});
        this.props.closeNewAppointment();
    };

    render() {
        return (
                <Modal onRequestClose={this.props.closeNewAppointment} onShow={this.props.showModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <View className={'modal-row'}>
                            <View>
                                <Text>Date:</Text>
                                <DatePickerAndroid
                                    selected={this.state.date}
                                    onChange={this.handleDateChange}
                                    locale={"no-bm"}
                                />
                            </View>
                            <View>
                                <Text>Time:</Text>
                                <TimePickerAndroid
                                    showSecond={false}
                                    defaultValue={moment().set('minute', 0)}
                                    onChange={this.handleTimeChange}
                                    disabledMinutes={this.disabledMinutes}
                                    hideDisabledOptions={true}

                                />
                            </View>
                        </View>
                        <View className={'modal-row'}>
                            <View>
                                <Text>Label:</Text>
                            </View>
                            <Form>
                                <View>
                                    <TextInput
                                        id={'label1'}
                                        type={'radio'}
                                        name={'radioGroup'}
                                        className={'modal-label-picker'}
                                        onChange={() => this.setColor('#337ab7')}/>
                                </View>
                                <View>
                                    <TextInput
                                        id={'label2'}
                                        type={'radio'}
                                        name={'radioGroup'}
                                        className={'modal-label-picker'}
                                        onChange={() => this.setColor('#A25188')}/>
                                </View>
                                <View>
                                    <TextInput
                                        id={'label3'}
                                        type={'radio'}
                                        name={'radioGroup'}
                                        className={'modal-label-picker'}
                                        onChange={() => this.setColor('#447884')}/>
                                </View>
                                <View>
                                    <TextInput
                                        id={'label4'}
                                        type={'radio'}
                                        name={'radioGroup'}
                                        className={'modal-label-picker'}
                                        onChange={() => this.setColor('#CA6573')}/>
                                </View>
                                <View>
                                    <TextInput
                                        id={'label5'}
                                        type={'radio'}
                                        name={'radioGroup'}
                                        className={'modal-label-picker'}
                                        onChange={() => this.setColor('#7B498D')}/>
                                </View>
                            </Form>
                        </View>
                        <View className={'modal-row'}>
                            <View>
                                <Text>Schedule description:</Text>
                            </View>
                            <View>
                                <TextInput
                                    type={'text'}
                                    placeholder={''}
                                    value={this.state.details}
                                    onChangeText={this.updateDetails}
                                />
                            </View>
                            <View>
                                <Button
                                    onPress={this.createAppointment}
                                    bsStyle={'primary'}
                                    className={'modal-schedule-button'}
                                    title={"Schedule event"}/>
                            </View>
                        </View>
                    </Modal.Body>
                </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
