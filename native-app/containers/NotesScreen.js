import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes',
        headerStyle: { backgroundColor: '#212a34', elevation: 6},
        headerTitleStyle: { color: '#fff', paddingTop: 5},
        headerTintColor: '#fff'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#666",
    },
});

