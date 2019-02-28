import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ListView } from 'react-native';

const users = [
  { name: 'john' },
  { name: 'ted' },
  { name: 'steve' }
]

export default class Component4 extends Component {

  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return (
      <View>
        <Text>{user.name}</Text>
      </View>
    )
  }

  render() {
    return (

      <View style={styles.container}>

        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
        />
        <Text style={{ color: 'purple' }}>Component4</Text>

      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flexDirection: 'row'
  }
})

AppRegistry.registerComponent('Component4', () => Component4);
