import React from 'react';
import StyleSheet from 'react-native';
import Text from 'react-native';
import View from 'react-native';

class Header extends React.Component {
  render () {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.text}>SaveMyLife.com</Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#212a34',
        padding: 15,
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
    }
});
