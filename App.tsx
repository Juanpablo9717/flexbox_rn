/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native';
import React from 'react';
import {Homework} from './src/presentation/screens/Homework';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Homework />
    </SafeAreaView>
  );
};

export default App;
