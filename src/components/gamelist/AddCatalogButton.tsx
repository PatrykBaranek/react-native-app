import React, { useState } from 'react';
import { IconButton, TextInput } from 'react-native-paper';
import { ModalContainer } from '../modal/Modal';
import { useAppDispatch } from '../../app/hooks';
import { createNewCatalog } from '../../app/gamelistSlice/gamelistSlice';
import { View } from 'react-native';

export const AddCatalogButton = () => {
  const [openAddCatalogModal, setOpenAddCatalogModal] = useState(false);
  const [newTitleCatalog, setNewTitleCatalog] = useState('');
  const dispatch = useAppDispatch();

  const handleOpenAddCatalog = () => {
    setOpenAddCatalogModal(true);
  };

  const handleCloseModal = () => {
    setOpenAddCatalogModal(false);
  };

  const handleAddCatalog = () => {
    dispatch(createNewCatalog(newTitleCatalog));
    setNewTitleCatalog('');
    setOpenAddCatalogModal(false);
  };

  return (
    <>
      <ModalContainer
        title="Add new catalog"
        visible={openAddCatalogModal}
        handleCloseModal={handleCloseModal}
        handleAddFunction={handleAddCatalog}
      >
        <TextInput
          label="Catalog name"
          value={newTitleCatalog}
          onChangeText={(text) => setNewTitleCatalog(text)}
        />
      </ModalContainer>
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
        <IconButton
          icon="folder-plus"
          mode="outlined"
          iconColor="green"
          onPress={handleOpenAddCatalog}
        />
      </View>
    </>
  );
};
