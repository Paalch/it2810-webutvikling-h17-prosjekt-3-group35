import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScheduleScreen from './containers/schedule/ScheduleScreen'
import TodoScreen from './containers/todo/TodoScreen'
import NotesScreen from './containers/notes/NotesScreen'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'SaveMyLife.com',
        headerStyle: { backgroundColor: '#212a34', elevation: 6, paddingTop: 6,},
        headerTitleStyle: { alignSelf: 'center', color: '#fff',},
        tintColor: '#fff'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('Schedule')} style={styles.schedule}>
                    <Text style={styles.buttonText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Todo')} style={styles.todo}>
                    <Text style={styles.buttonText}>Todo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Notes')} style={styles.notes}>
                    <Text style={styles.buttonText}>Note</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const NativeApp = StackNavigator({
    Home: { screen: HomeScreen },
    Schedule: { screen: ScheduleScreen },
    Todo: { screen: TodoScreen },
    Notes: { screen: NotesScreen }
});

export default class App extends React.Component {
    render() {
        return <NativeApp />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#666",
    },

    schedule: {
        backgroundColor: "#cfc",
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        display: 'flex',
        elevation: 6,
        shadowColor: 'rgba(33,33,33,.7)',
        shadowOpacity: 7,
        shadowOffset: {
            height: 5,
            width: 5
        },
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    todo: {
        backgroundColor: "#ccf",
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        display: 'flex',
        elevation: 6,
        shadowColor: 'rgba(33,33,33,.7)',
        shadowOpacity: 7,
        shadowOffset: {
            height: 5,
            width: 5
        },
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    notes: {
        backgroundColor: "#FFFFA5",
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        marginBottom: '3%',
        display: 'flex',
        elevation: 6,
        shadowColor: 'rgba(33,33,33,.7)',
        shadowOpacity: 7,
        shadowOffset: {
            height: 5,
            width: 5
        },
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 40,
        color: '#212a34'
    }
});