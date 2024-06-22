import {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SpecificStylesType} from '../domain/types/styles';

const stylesConfig: {[key: number]: SpecificStylesType} = {
  1: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
      flex: 1,
    },
    blueBox: {
      backgroundColor: '#28c3d9',
    },
  },
};

export const useHomeworkScreen = () => {
  const getStylesById = useCallback(
    (exerciseId: number): SpecificStylesType => {
      const selectedStyles = stylesConfig[exerciseId];
      if (selectedStyles) {
        return StyleSheet.create(selectedStyles);
      } else {
        return StyleSheet.create({} as SpecificStylesType);
      }
    },
    [],
  );

  return {getStylesById};
};
