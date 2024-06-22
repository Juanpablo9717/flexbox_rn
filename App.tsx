/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {Homework} from './src/presentation/screens/Homework';
import {colors} from './src/presentation/theme/colors';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.mainGray}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor={colors.mainGray}
          barStyle={'light-content'}
        />
        <Homework />
      </SafeAreaView>
    </View>
  );
};

export default App;
