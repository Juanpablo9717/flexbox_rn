/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {CustomModal} from '../components/CustomModal/CustomModal';
import {useHomeworkScreen} from '../../hooks/useGetStylesByExercise';
import {colors} from '../theme/colors';

interface ArrorBtnProps {
  action: () => void;
  label: '<' | '>'; // TODO: install icons pending
  disabled: boolean;
}

const ArrowButton = ({action, label, disabled}: ArrorBtnProps) => {
  return (
    <Pressable
      disabled={disabled}
      style={styles.actionBtn}
      onPress={() => action()}>
      <Text style={styles.actionText}>{label}</Text>
    </Pressable>
  );
};

export const Homework = () => {
  const [currentTask, setCurrentTask] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const {getStylesById} = useHomeworkScreen();
  const calcStyles = getStylesById(currentTask);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={{flex: 1}}>
      <View style={[styles.container, calcStyles.container]}>
        {/* Modal */}
        <CustomModal
          closeModal={() => closeModal()}
          modalVisible={modalVisible}
          imageId={currentTask}
        />

        {/* Content */}
        <View style={[styles.box, styles.purpleBox, calcStyles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox, calcStyles.orangeBox]} />
        <View style={[styles.box, styles.blueBox, calcStyles.blueBox]} />
      </View>
      {/* FAB open modal */}
      <Pressable style={styles.fab} onPress={() => openModal()}>
        <Text style={{color: 'black', fontSize: 18}}>{'!'}</Text>
      </Pressable>
      <View style={[styles.actionsContaner]}>
        <ArrowButton
          action={() => setCurrentTask(currentTask - 1)}
          label="<"
          disabled={currentTask <= 1}
        />
        <Text style={[styles.actionText, styles.counterDisplay]}>
          {currentTask}
        </Text>
        <ArrowButton
          action={() => setCurrentTask(currentTask + 1)}
          label=">"
          disabled={currentTask >= 10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContaner: {
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    gap: 24,
    alignSelf: 'center',
    borderRadius: 10,
  },
  actionBtn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 24,
    color: 'black',
  },
  fab: {
    backgroundColor: '#6d9cfb',
    borderRadius: 100,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: 20,
  },
  counterDisplay: {
    marginTop: 5,
    width: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.mainGray,
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
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
