import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

const App = () => (
  <Header />
);

export default App;

AppRegistry.registerComponent('albums', () => App);
