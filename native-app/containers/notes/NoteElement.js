import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class NotesElement extends React.Component {
    render () {
        return (
            <View style={styles.innerNotesContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={() => this.props.deleteNote(this.props.note.id)}>
                    <Text>X</Text>
                </TouchableOpacity>
                    <View>
                     <TextInput
                         style={styles.noteField}
                         value={this.props.note.text}
                         onChange={(event) => this.props.updateTextField(this.props.note.id, event.target.value)}
                         id={this.props.note.id}
                         multiline={true}
                         numberOfLines={4}
                         underlineColorAndroid='rgba(0,0,0,0)'
                         placeholder={"Start typing here..."}
                         placeholderTextColor={"#666"}>
                     </TextInput>
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

    deleteButton: {
        alignSelf: "flex-end",
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 10,
        width: "10%",
    },
});