import React from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { FTPGame, useGetGamesQuery } from '../api/freeToPlayapi';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { GameItem } from './GameItem';

export const GamesList = () => {
  const { data: games, isLoading, isFetching, refetch } = useGetGamesQuery();

  const renderItem = ({ item, index, separators }: ListRenderItemInfo<FTPGame>) => {
    return <GameItem item={item} index={index} separators={separators} />;
  };

  const onRefresh = () => {
    refetch();
  };

  return (
    <FlatList
      data={games}
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={onRefresh}
          colors={['#fff', '#ccc', 'white']}
        />
      }
      renderItem={renderItem}
    />
  );
};
