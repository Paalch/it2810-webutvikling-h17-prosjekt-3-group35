import React from 'react';
import StyleSheet from 'react-native';
import Text from 'react-native';
import View from 'react-native';

class Notes extends React.Component {
  render () {
    return (
      <View Style={styles.notesContainer}>
        <link  href="http://fonts.googleapis.com/css?family=Reenie+Beanie:regular"
               rel="stylesheet"
               type="text/css"/>
        <View Style={styles.notesBoxHeader}>
          <Text>Notes</Text>
        </View>
        <View Style={styles.notesBoxBody}>
          <Text>Lorem ipsum</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notesContainer: {
    backgroundColor: "#FFFFA5",
    padding: 30,
    shadowColor: 'rgba(33,33,33,.7)',
      shadowOpacity: 7,
      shadowOffset: {
          height: 5,
          width: 5
      },
  },

  notesBoxBody: {
    fontFamily:"Reenie Beanie",
    fontSize: 180
  }
});

export default Notes;