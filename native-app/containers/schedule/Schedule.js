import React from 'react';
import StyleSheet from 'react-native';
import Text from 'react-native';
import View from 'react-native';

class Schedule extends React.Component {
  render () {
    return (
      <View Style={styles.scheduleContainer}>
        <View Style={styles.boxHeader}>
          <Text>Schedule</Text>
        </View>
        <View Style={styles.boxBody}>
          <Text>Lorem ipsum</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scheduleContainer: {
    backgroundColor: "#cfc",
    padding: 30,
    shadowColor: 'rgba(33,33,33,.7)',
      shadowOpacity: 7,
      shadowOffset: {
          height: 5,
          width: 5
      },
  }
});

export default Schedule;