import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.text}>SaveMyLife.com</Text>
          </View>
          <View style={styles.back}>
              <View style={styles.scheduleContainer}>
                  <View style={styles.scheduleBoxHeader}>
                      <Text style={styles.innerText}>Schedule</Text>
                  </View>
              </View>
              <View style={styles.todoContainer}>
                  <View style={styles.todoBoxHeader}>
                      <Text style={styles.innerText}>2do</Text>
                  </View>
              </View>
              <View style={styles.notesContainer}>
                  <View style={styles.notesBoxHeader}>
                      <Text style={styles.innerText}>Notes</Text>
                  </View>
              </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },

    headerContainer: {
        backgroundColor: '#212a34',
        elevation: 6,
        paddingTop: 30,
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
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    },

    back: {
        backgroundColor: "#666",
        flex: 1
    },

    scheduleContainer: {
        backgroundColor: "#cfc",
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        display: 'flex',
        elevation: 6,
        shadowColor: 'rgba(33,33,33,.7)',
        shadowOpacity: 7,
        shadowOffset: {
            height: 5,
            width: 5
        },
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    todoContainer: {
        backgroundColor: "#ccf",
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        display: 'flex',
        elevation: 6,
        shadowColor: 'rgba(33,33,33,.7)',
        shadowOpacity: 7,
        shadowOffset: {
            height: 5,
            width: 5
        },
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    notesContainer: {
        backgroundColor: "#FFFFA5",
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        marginBottom: '3%',
        display: 'flex',
        elevation: 6,
        shadowColor: 'rgba(33,33,33,.7)',
        shadowOpacity: 7,
        shadowOffset: {
            height: 5,
            width: 5
        },
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerText: {
        fontSize: 40,
        color: '#212a34'
    }
});