import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import TodoElement from "./TodoElement"

export default class TodoScreen extends React.Component {
    static navigationOptions = {
        title: 'Todo',
        headerStyle: { backgroundColor: '#212a34', elevation: 6, paddingTop: 6,},
        headerTitleStyle: { color: '#fff',},
        headerTintColor: '#fff'
    };

    state = {
        todos: [],
        text: ''
    };

    render() {

        let content = this.state.todos.map((todo, i) => {
            return <TodoElement key={i} keyval={i} val={todo} removeTodo={() => this.removeElement(i)}/>
        });

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>

                    <TextInput style={styles.textInput}
                        placeholder="Tap here to write..."
                        placeholderTextColor="#666"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}>
                    </TextInput>

                    <TouchableOpacity onPress={this.saveTodo.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollview}>
                    {content}
                </ScrollView>
            </View>
        );
    }

    saveTodo() {
        if (this.state.text ) {
            this.state.todos.push({'text': this.state.text});
            this.setState({todos: this.state.todos});
            this.setState({text: ''});
        }
    };

    removeElement(todo) {
        this.state.todos.splice(todo, 1);
        this.setState({todos: this.state.todos});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#666",
        padding: 10,
    },

    textContainer: {
        backgroundColor: "#ccccff",
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        elevation: 2,
    },

    addButton: {
        alignItems: "center",
        alignSelf: "flex-end",
        justifyContent: "center",
        backgroundColor: "#cbf",
        width: 90,
        height: 70,
        elevation: 8,
        marginTop: -45,
    },

    addButtonText: {
        fontSize: 24,
        color: '#212a34',
    },

    scrollview: {
        backgroundColor: "#ccccff",
        marginTop: 70,
        flex: 1
    },

    textInput: {
        paddingLeft: 20,
        paddingTop: 10
    },

});

