import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { FlatList } from 'react-native';
import { useAppSelector } from '../hooks';

export const WishlistScreen = () => {
  const games = useAppSelector((state) => state.wishlist.games);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <Text variant="titleLarge" style={{ color: '#fff' }}>
        Wishlist
      </Text>
      <FlatList
        data={games}
        renderItem={(game) => <Text variant="titleLarge">{game.item.title}</Text>}
      />
    </SafeAreaView>
  );
};
