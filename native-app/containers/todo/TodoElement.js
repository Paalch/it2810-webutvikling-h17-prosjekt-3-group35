import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class TodoElement extends React.Component {
    render() {
        return (
            <View>
                <input
                    style={styles.todoElement}
                    type={'checkbox'}
                    onProgress={() => this.props.removeElement(this.props.text)}/>
                <label>{this.props.text}</label>
            </View>
        );
    }
}

TodoElement.propTypes = {
    text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    todoElement: {
        fontWeight: "normal",
    },
});

