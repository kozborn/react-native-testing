/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './components/WebApp';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
});
