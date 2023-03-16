import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { FTPGame, useGetGamesByGenreQuery } from '../app/api/freeToPlayapi';
import { GameItem } from './GameItem';
import { useAppSelector } from '../hooks';

export const GamesList: React.FC = () => {
  const genre = useAppSelector((state) => state.genre.selectedGenre);
  const { data: games, isFetching, refetch } = useGetGamesByGenreQuery(genre);

  const renderItem = useCallback(
    ({ item, index, separators }: ListRenderItemInfo<FTPGame>) => {
      return <GameItem item={item} index={index} separators={separators} />;
    },
    [games]
  );

  const onRefresh = () => {
    refetch();
  };

  useEffect(() => {
    onRefresh();
  }, [genre, games]);

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
