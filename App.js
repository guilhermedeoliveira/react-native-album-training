import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

const App = () => (
  <Header textHeader={'Album'} />
);

export default App;

AppRegistry.registerComponent('albums', () => App);
