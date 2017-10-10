import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import TodoElement from './TodoElement';

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            text: ''
        };
        this.updateTextField = this.updateTextField.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    updateTextField(e) {
        this.setState({text: e.target.value});
    }

    removeElement(todo) {
        this.setState({
            todos: this.state.todos.filter((t) =>
                t !== todo
            )
        });
    }

    saveTodo() {
        const todoValue = this.state.text;
        if (todoValue.length === 0) {
            return;
        }
        this.setState({todos: this.state.todos.concat(todoValue), text: ''});
    };

    render() {
        const content = this.state.todos.map((todo, i) =>
            <TodoElement text={todo} key={i} removeElement={this.removeElement}/>
        );
        return (
            <View style={styles.container}>
                <View>
                    <View>
                        <TextInput
                            style={styles.formInput}
                            type={'text'}
                            value={this.state.text}
                            onChange={this.updateTextField}multiline={true}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={this.saveTodo}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.todos}>
                    {content}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ccccff",
        padding: 20,
    },

    todos: {
        marginTop: 10,
    },

    addButton: {
        alignSelf: "flex-end",
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 10,
        width: "10%",
    },

});
