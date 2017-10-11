import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class TodoElement extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.todo}>
                <TouchableOpacity onPress={this.props.removeTodo} style={styles.checkBox}>
                    <Text> </Text>
                </TouchableOpacity>
                <Text style={styles.todoTekst}>
                    {this.props.val.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todo: {
        padding: 20,
        position: "relative",
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: "#cbf",
    },

    todoTekst: {
        color: "black",
        paddingLeft: 30,
    },

    checkBox: {
        backgroundColor: "#fff",
        width: 25,
        height: 25,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ccccff",
        position: "absolute",
        top: 15,
        left: 10,
        elevation: 2,
        alignItems: "center",
        alignSelf: "flex-start",
        justifyContent: "center",
        borderStyle: "solid",
    },
});

