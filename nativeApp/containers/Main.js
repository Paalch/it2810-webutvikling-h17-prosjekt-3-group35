import React, {Component} from 'react';
import Schedule from "./schedule/Schedule";
import Todo from "./todo/Todo";
import Notes from "./notes/Notes";
import StyleSheet from 'react-native';
import View from 'react-native';

class Main extends React.Component {
  render () {
    return (
      <view style={styles.mainContainer}>
        <View>
          <View style={styles.mainRow}>
            <View md={7} style={styles.leftMain}>
              <View style={styles.box}>
                <Schedule/>
              </View>
            </View>
            <View md={5} Style={styles.rightMain}>
              <View style={styles.box}>
                <Todo/>
                <Notes/>
              </View>
            </View>
          </View>
        </View>
      </view>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 3*'vh',
        flex: 1
    },

    mainRow: {
        margin: 0,
        flexDirection: 'row'
    },

    container: {
        padding: 0,
    },

    leftMain: {
        padding: 0,
        flexDirection: 'column'
    },

    rightMain: {
        padding: 0,
        flexDirection: 'column'
    },

    box: {
        marginRight: 1*'vh',
        marginLeft: 1*'vh',
        marginBottom: 2*'vh',
    },

    body: {
        fontFamily: 'arial',
    },

    root: {
        height: 100*'vh',
        backgroundColor: "#666"
    }
});

export default Main;
