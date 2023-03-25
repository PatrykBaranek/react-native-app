import React, { useState } from 'react';
import { Portal, RadioButton, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StyleSheet, View } from 'react-native';
import { FTPGame } from '../../app/api/freeToPlayapi';
import { addGameToCatalog } from '../../app/gamelistSlice/gamelistSlice';
import { ModalContainer } from '../modal/Modal';

interface AddToCatalogModalProps {
  game: FTPGame;
  visible: boolean;
  handleCloseModal: () => void;
}

export const AddToCatalogModal: React.FC<AddToCatalogModalProps> = ({
  game,
  visible,
  handleCloseModal,
}) => {
  const [selectedCatalog, setSelectedCatalog] = useState('');
  const catalogs = useAppSelector((state) => state.gamelist.catalogs);
  const dispatch = useAppDispatch();

  const handleAddToCatalog = () => {
    dispatch(addGameToCatalog({ game: game, catalogId: selectedCatalog }));
  };

  return (
    <ModalContainer
      visible={visible}
      handleCloseModal={handleCloseModal}
      handleAddFunction={handleAddToCatalog}
    >
      <RadioButton.Group
        value={selectedCatalog}
        onValueChange={(newValue) => setSelectedCatalog(newValue)}
      >
        {catalogs.map((catalog) => (
          <RadioButton.Item
            key={catalog.id}
            label={catalog.name}
            value={catalog.id}
            labelStyle={{ color: '#fff' }}
          />
        ))}
      </RadioButton.Group>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    backgroundColor: '#000',
    height: 250,
    borderRadius: 20,
    padding: 20,
  },
});
