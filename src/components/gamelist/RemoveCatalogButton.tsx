import React from 'react';
import { IconButton } from 'react-native-paper';
import { useAppDispatch } from '../../app/hooks';
import { removeCatalog } from '../../app/gamelistSlice/gamelistSlice';
import { useNavigation } from '@react-navigation/native';
import { GamelistScreenNavigationProps } from '../../navigation/GamelistStackScreen';
import { View } from 'react-native';

interface RemoveCatalogButtonProps {
  catalogId: string;
}

export const RemoveCatalogButton: React.FC<RemoveCatalogButtonProps> = ({ catalogId }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<GamelistScreenNavigationProps>();

  const handleRemoveCatalog = () => {
    dispatch(removeCatalog(catalogId));
    navigation.goBack();
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
      <IconButton
        icon="folder-remove"
        mode="outlined"
        iconColor="red"
        onPress={handleRemoveCatalog}
      />
    </View>
  );
};
