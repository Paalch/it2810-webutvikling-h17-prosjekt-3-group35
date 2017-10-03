import React from 'react';
import StyleSheet from 'react-native';
import Text from 'react-native';
import View from 'react-native';

class Todo extends React.Component {
  render () {
    return (
      <View Style={styles.todoContainer}>
        <View Style={styles.boxHeader}>
          <Text>2do</Text>
        </View>
        <View Style={styles.boxBody}>
          <Text>Lorem ipsum</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 todoContainer: {
    backgroundColor: "#ccf",
    padding: 30,
    shadowColor: 'rgba(33,33,33,.7)',
     shadowOpacity: 7,
     shadowOffset: {
         height: 5,
         width: 5
     },
 },

 boxheader: {
     flexDirection: 'row'
 },

 boxBocy: {
     flexDirection: 'row'
 }

});

export default Todo;