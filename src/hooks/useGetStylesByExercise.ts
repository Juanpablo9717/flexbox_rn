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
  2: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      justifyContent: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
    },
    blueBox: {
      backgroundColor: '#28c3d9',
      width: '100%',
    },
  },
  3: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      justifyContent: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
      alignSelf: 'flex-end',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
    },
    blueBox: {
      backgroundColor: '#28c3d9',
      alignSelf: 'center',
    },
  },
  4: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
      alignSelf: 'flex-end',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
    },
    blueBox: {
      backgroundColor: '#28c3d9',
      alignSelf: 'flex-start',
    },
  },
  5: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
      height: '100%',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
      height: '100%',
    },
    blueBox: {
      backgroundColor: '#28c3d9',
      height: '100%',
    },
  },
  6: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
      flex: 1,
      width: 'auto',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
      flex: 1,
      width: 'auto',
    },
    blueBox: {
      backgroundColor: '#28c3d9',
      flex: 2,
      width: 'auto',
    },
  },
  7: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      justifyContent: 'center',
      alignItems: 'center',
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
  },
  8: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
      left: 100,
    },
    blueBox: {
      backgroundColor: '#28c3d9',
    },
  },
  9: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
      top: 100,
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
      left: 100,
    },
    blueBox: {
      backgroundColor: '#28c3d9',
    },
  },
  10: {
    container: {
      flex: 1,
      backgroundColor: '#28425b',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
      top: 50,
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
