import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TodoScreen extends React.Component {
    static navigationOptions = {
        title: 'Todo',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

