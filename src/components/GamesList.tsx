import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { FTPGame, useGetGamesQuery } from '../api/freeToPlayapi';
import { GameItem } from './GameItem';

export const GamesList: React.FC = () => {
  const { data: games, isLoading, isFetching, refetch } = useGetGamesQuery();

  const renderItem = useCallback(
    ({ item, index, separators }: ListRenderItemInfo<FTPGame>) => {
      return <GameItem item={item} index={index} separators={separators} />;
    },
    [games]
  );

  const onRefresh = () => {
    refetch();
  };

  return (
    <FlatList
      data={games}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} tintColor={'#fff'} />
      }
      renderItem={renderItem}
      style={{ backgroundColor: '#111', shadowColor: '#222' }}
    />
  );
};
