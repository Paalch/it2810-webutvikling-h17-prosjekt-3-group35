import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

