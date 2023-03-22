import React from 'react';
import { FlatList, ListRenderItemInfo, TouchableHighlight, View, StyleSheet } from 'react-native';
import { CatalogType } from '../../app/gamelistSlice/gamelistSlice';
import { Badge, IconButton, Text } from 'react-native-paper';
import { useAppSelector } from '../../app/hooks';
import { useNavigation } from '@react-navigation/native';
import { GamelistScreenNavigationProps } from '../../navigation/GamelistStackScreen';

export const CatalogsRenderer = () => {
  const navigation = useNavigation<GamelistScreenNavigationProps>();
  const catalogs = useAppSelector((state) => state.gamelist.catalogs);

  const renderItem = ({ item: catalog }: ListRenderItemInfo<CatalogType>) => {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Catalog', { id: catalog.id, name: catalog.name })}
      >
        <View style={styles.catalogItem}>
          {catalog.games.length > 0 && (
            <Badge style={{ position: 'absolute', top: 0, right: 20, zIndex: 9999 }}>
              {catalog.games.length}
            </Badge>
          )}
          <IconButton icon="folder" mode="contained" />
          <Text style={styles.catalogText}>{catalog.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <FlatList data={catalogs} renderItem={renderItem} contentContainerStyle={styles.conatiner} />
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: 'row',
  },
  catalogItem: { position: 'relative', height: 100, width: 100, alignItems: 'center' },
  catalogText: { color: '#fff', fontSize: 16 },
});
