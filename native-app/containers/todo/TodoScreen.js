import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './TodoList';

export default class TodoScreen extends React.Component {
    static navigationOptions = {
        title: 'Todo',
        headerStyle: { backgroundColor: '#212a34', elevation: 6, paddingTop: 6,},
        headerTitleStyle: { color: '#fff',},
        headerTintColor: '#fff'
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.todoBody}>
                    <TodoList />
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
});

