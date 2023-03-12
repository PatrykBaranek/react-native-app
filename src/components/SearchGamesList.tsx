import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useGetGamesQuery } from '../api/freeToPlayapi';
import { GameItem } from './GameItem';
import { useMemo } from 'react';

interface SearchGamesListProps {
  searchGameTitle: string;
}

export const SearchGamesList: React.FC<SearchGamesListProps> = ({ searchGameTitle }) => {
  const { data } = useGetGamesQuery();

  const games = useMemo(
    () => data?.filter((game) => game.title.includes(searchGameTitle)),
    [data, searchGameTitle]
  );

  console.log(games);

  if (searchGameTitle.length < 2) {
    return (
      <View style={{ flex: 1, backgroundColor: '#111' }}>
        <Text variant="bodyLarge">Fill input to find games</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: '#111' }}
      data={games}
      renderItem={({ index, item, separators }) => (
        <GameItem item={item} index={index} separators={separators} />
      )}
    />
  );
};
