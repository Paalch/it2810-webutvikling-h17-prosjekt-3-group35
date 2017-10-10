import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class NotesElement extends React.Component {
    render () {
        return (
            <View style={styles.innerNotesContainer}>
                <TouchableOpacity onPress={() => this.props.deleteNote(this.props.note.id)}>
                    <Text>X</Text>
                </TouchableOpacity>
                <View Style={styles.notes}>
                    <View style={styles.boxBody}>
                     <TextInput
                         value={this.props.note.text}
                         onChange={(event) => this.props.updateTextField(this.props.note.id, event.target.value)}
                         id={this.props.note.id}
                         maxRows={7}>
                     </TextInput>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    innerNotesContainer: {
        backgroundColor: "#ffffa5",
        padding: 15,
        elevation: 7,
        shadowColor: 'rgba(33,33,33,.7)',
        shadowOpacity: 8,
        shadowOffset: {
            height: 6,
            width: 6
        },
        marginBottom: "2%",
    },
});