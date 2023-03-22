import React from 'react';
import { FlatList, ListRenderItemInfo, TouchableHighlight, View } from 'react-native';
import { CatalogType } from '../../app/gamelistSlice/gamelistSlice';
import { IconButton, Text } from 'react-native-paper';
import { useAppSelector } from '../../app/hooks';
import { useNavigation } from '@react-navigation/native';
import { GamelistScreenNavigationProps } from '../../navigation/GamelistStackScreen';

export const CatalogsRenderer = () => {
  const navigation = useNavigation<GamelistScreenNavigationProps>();
  const catalogs = useAppSelector((state) => state.gamelist.catalogs);

  const renderItem = ({ item: catalog }: ListRenderItemInfo<CatalogType>) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate('Catalog', { id: catalog.id })}>
        <View>
          <IconButton icon="folder" mode="contained" />
          <Text style={{ color: '#fff' }}>{catalog.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <FlatList
      data={catalogs}
      renderItem={renderItem}
      style={{ flexDirection: 'row', gap: 10, padding: 20 }}
    />
  );
};
