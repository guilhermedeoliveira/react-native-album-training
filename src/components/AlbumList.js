import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  

  componentWillMount() {
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
      console.log(this.state);
  }

  render() {
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

export default AlbumList;
