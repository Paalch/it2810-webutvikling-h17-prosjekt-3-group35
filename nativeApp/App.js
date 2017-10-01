import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.text}>SaveMyLife.com</Text>
          </View>
          <View style={styles.back}>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#212a34',
        paddingTop: 40,
        paddingBottom: 10,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOpacity: 3,
        shadowOffset: {
            height: 0,
            width: 1
        },
    },

    text: {
        color: '#fff',
        textAlign: 'center'
    },

    back: {
        backgroundColor: "#666",
        height: '100%'
    }
});
