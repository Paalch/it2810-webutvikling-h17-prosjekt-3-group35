import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Schedule = () => {
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
};

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