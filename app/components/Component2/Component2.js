import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class Component2 extends Component {

  onPress() {
    console.log('area pressed');
  }

  render() {

    return (

      <View style={styles.myView}>

        <Text style={{ color: 'red' }}>Component2</Text>

        <View style={styles.container}>

          <TouchableHighlight style={styles.v1} onPress={this.onPress}>
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.v2}>
            <Text>View 2</Text>
          </View>

          <View style={styles.v3}>
            <Text>View 3</Text>
          </View>

        </View>

      </View>

    )
  }
}
const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  container: {
    backgroundColor: 'yellow',
    flexDirection: 'row'
  }
})

AppRegistry.registerComponent('Component2', () => Component2);
