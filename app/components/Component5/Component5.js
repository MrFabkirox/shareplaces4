import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ListView } from 'react-native';

export default class Component5 extends Component {

  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return (
      <View>
        <Text>{user.name}</Text>
      </View>
    )
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response)
        });
      });
  }


  render() {

    return (


      <View style={styles.container}>
        <Text style={{ color: '#A2A77F' }}>Component5</Text>

        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
        />

      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF1C5',
    flexDirection: 'row'
  }
})

AppRegistry.registerComponent('Component5', () => Component5);

