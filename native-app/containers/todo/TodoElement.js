import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class TodoElement extends React.Component {
    render() {
        return (
            <View style={styles.todoElement}>
                <input
                    style={styles.checkboxRound}
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
    checkboxRound: {
        width: "1.3em",
        height: "1.3em",
        backgroundColor: "white",
    }
});

