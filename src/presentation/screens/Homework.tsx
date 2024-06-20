import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Homework = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
  },
  box: {
    height: 100,
    width: 100,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
  },
  blueBox: {
    backgroundColor: '#28c3d9',
  },
});
