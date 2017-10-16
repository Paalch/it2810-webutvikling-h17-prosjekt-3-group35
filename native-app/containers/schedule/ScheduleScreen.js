import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScheduleScreen extends React.Component {
    static navigationOptions = {
        title: 'Schedule',
        headerStyle: { backgroundColor: '#212a34', elevation: 6, paddingTop: 6,},
        headerTitleStyle: { color: '#fff',},
        headerTintColor: '#fff'
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.schedule}>
                    <Text>Lorem ipsum</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#666",
        padding: 10,
    },

    schedule: {
        backgroundColor: "#cf7",
    },
});