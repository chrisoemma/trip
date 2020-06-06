/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/screens/auth/Login';
import Trips from './src/screens/tabs/Trips';
import HamburgerNavigation from './src/navigations/HamburgerNavigation';


const App=() => {
  return (
   <Login />

  );
};

const styles = StyleSheet.create({
});

export default App;
