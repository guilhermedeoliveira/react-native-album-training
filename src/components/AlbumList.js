import React, { Component } from 'react';
import { View } from 'react-native';

import AlbumDetail from './AlbumDetail';
import Card from './Card';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: [] };
  }

  componentWillMount() {
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
      console.log(this.state);
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Card key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
