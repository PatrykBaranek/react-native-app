import React, { ReactElement, useState } from 'react';
import { Button, Portal } from 'react-native-paper';
import Modal from 'react-native-modal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { View, StyleSheet, ScrollView } from 'react-native';
import { addGameToCatalog } from '../../app/gamelistSlice/gamelistSlice';

interface ModalContainerProps {
  children: ReactElement;
  visible: boolean;
  handleCloseModal: () => void;
  handleAddFunction: () => void;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  visible,
  handleCloseModal,
  handleAddFunction,
}) => {
  return (
    <Portal>
      <Modal isVisible={visible} onDismiss={handleCloseModal}>
        <View style={styles.modal}>
          <ScrollView style={{ flexGrow: 1 }}>{children}</ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
            <Button mode="contained-tonal" onPress={handleCloseModal}>
              Cancel
            </Button>
            <Button mode="contained" onPress={handleAddFunction}>
              Save
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 20,
  },
});
