/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import Component1 from './app/components/Component1/Component1'
import Component2 from './app/components/Component2/Component2'
import Component3 from './app/components/Component3/Component3'
import Component4 from './app/components/Component4/Component4'
import Component5 from './app/components/Component5/Component5'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.log(err);
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Shareplaces4</Text>

        <Component5 />
        <Component5 />
        <Component4 />
        <Component3 />
        <Component2 />
        <Component1 />

        <FetchLocation onGetLocation={this.getUserLocationHandler} />

        <Text style={styles.instructions}>{instructions}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
