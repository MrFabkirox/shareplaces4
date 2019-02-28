import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class Component2 extends Component {

  onPress() {
    console.log('area pressed');
  }

  render() {

    return (

      <View style={styles.myView}>

        <Text style={{ color: '#EFF1C5' }}>Component2</Text>

        <View style={styles.container}>

          <TouchableHighlight style={styles.v1} onPress={this.onPress}>
            <View>
              <Text style={{ backgroundColor: '#E3E7AF' }}>Click Me</Text>
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
    backgroundColor: '#A2A77F'
  },
  container: {
    backgroundColor: '#EFF1C5',
    flexDirection: 'row'
  }
})

AppRegistry.registerComponent('Component2', () => Component2);
