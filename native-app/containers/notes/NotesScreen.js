import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import NoteElement from './NoteElement';

export default class NotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes',
        headerStyle: { backgroundColor: '#F5D76E', elevation: 6, paddingTop: 6,},
        headerTitleStyle: { color: '#fff',},
        headerTintColor: '#fff'
    };

    constructor() {
        super();
        this.state = {
            notes: [],
            currentKeyCounter: 0
        };
        this.addNewNote = this.addNewNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.updateTextField = this.updateTextField.bind(this);
    }

    addNewNote() {
        this.setState({
            notes: this.state.notes.concat({id: this.state.currentKeyCounter, text: ''}),
            currentKeyCounter: this.state.currentKeyCounter + 1
        });
    }

    deleteNote(index) {
        const tempNotes = this.state.notes.filter(n => n.id !== index);
        this.setState({notes: tempNotes,currentKeyCounter: this.state.currentKeyCounter});
    }

    updateTextField(index, text) {
        const tempNotes = this.state.notes;
        tempNotes.forEach((note) => {
            if(note.id === index) {
                note.text = text;
            }
        });
        this.setState({notes: tempNotes, currentKeyCounter: this.state.currentKeyCounter})

    }

    render () {
        const content = this.state.notes.map((note, i) =>
            <NoteElement key={i} note={note} updateTextField={this.updateTextField} deleteNote={this.deleteNote}/>
        );

        return (
            <View style={styles.container}>
                <ScrollView style={styles.notesBody}>
                   { content }
                </ScrollView>
                <Button onPress={this.addNewNote} title={"+ New Note"} color={"#666"}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#212a34",
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 6,
    },
});

