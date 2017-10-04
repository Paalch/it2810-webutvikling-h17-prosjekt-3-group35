import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScheduleScreen from './containers/ScheduleScreen'
import TodoScreen from './containers/TodoScreen'
import NotesScreen from './containers/NotesScreen'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'SaveMyLife.com'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View stykle={styles.container}>
                <Button style={styles.navButton}
                    onPress={() => navigate('Schedule')}
                    title="Schedule"
                />
                <Button style={styles.navButton}
                    onPress={() => navigate('Todo')}
                    title="Todo"
                />
                <Button style={styles.navButton}
                    onPress={() => navigate('Notes')}
                    title="Notes"
                />
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Schedule: { screen: ScheduleScreen },
    Todo: { screen: TodoScreen },
    Notes: { screen: NotesScreen }
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    navButton: {

    }
});