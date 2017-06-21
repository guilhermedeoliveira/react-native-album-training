import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header textHeader={'Album'} />
    <AlbumList />
  </View>
);

export default App;

AppRegistry.registerComponent('albums', () => App);
