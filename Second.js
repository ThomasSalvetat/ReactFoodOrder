/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid,
  TouchableHighlight,
} from 'react-native';

class Second extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        navIcon={require('image!ic_arrow_back_white_24dp')}
                        onIconClicked={this.props.navigator.pop}
                        titleColor={'#FFFFFF'}/>
        <Text>
          Second screen
        </Text>
      </View>
    );
  }
};

module.exports = Second;