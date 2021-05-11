/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MainStackNavigator } from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        
          <StatusBar animated={true} backgroundColor='#FFFFFF' barStyle='dark-content' />
          <MainStackNavigator />
        
      </NavigationContainer>
    );
  }
};