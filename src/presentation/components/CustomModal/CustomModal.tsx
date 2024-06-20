/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface CustomModalProps {
  modalVisible: boolean;
  imageId: number;
  closeModal: () => void;
}

export const CustomModal = ({
  modalVisible,
  imageId = 1,
  closeModal,
}: CustomModalProps) => {
  const images: Record<number, ImageSourcePropType> = {
    1: require('../../../assets/tarea-1.png'),
    2: require('../../../assets/tarea-2.png'),
    3: require('../../../assets/tarea-3.png'),
    4: require('../../../assets/tarea-4.png'),
    5: require('../../../assets/tarea-5.png'),
    6: require('../../../assets/tarea-6.png'),
    7: require('../../../assets/tarea-7.png'),
    8: require('../../../assets/tarea-8.png'),
    9: require('../../../assets/tarea-9.png'),
    10: require('../../../assets/tarea-10.png'),
  };

  const imageSource = images[imageId];

  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      visible={modalVisible}>
      <View style={styles.backgroundModal}>
        <View style={styles.modal}>
          <Pressable style={styles.closeBtn} onPress={() => closeModal()}>
            <Text style={{color: 'black', fontSize: 18}}>X</Text>
          </Pressable>
          <Image style={styles.image} source={imageSource} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    backgroundColor: '#f2eaea',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    top: 30,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 10,
  },
  backgroundModal: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    width: '90%',
    height: '90%',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    width: 'auto',
    borderRadius: 15,
  },
});
