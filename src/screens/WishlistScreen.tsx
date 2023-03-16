import { SafeAreaView } from 'react-native-safe-area-context';
import { DataTable, Text } from 'react-native-paper';
import { FlatList, View } from 'react-native';
import { useAppSelector } from '../hooks';
import { ScrollView } from 'react-native';

export const WishlistScreen = () => {
  const games = useAppSelector((state) => state.wishlist.games);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <View style={{ padding: 20, backgroundColor: '#111' }}>
        <Text variant="titleLarge" style={{ color: '#fff', textAlign: 'center' }}>
          Wishlist
        </Text>
      </View>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title textStyle={{ color: '#fff' }} numeric>
              ID
            </DataTable.Title>
            <DataTable.Title textStyle={{ color: '#fff' }}>Title</DataTable.Title>
          </DataTable.Header>
          <FlatList
            data={games}
            renderItem={(game) => (
              <DataTable.Row>
                <DataTable.Cell textStyle={{ color: '#fff' }}>{game.item.id}</DataTable.Cell>
                <DataTable.Cell textStyle={{ color: '#fff' }}>{game.item.title}</DataTable.Cell>
              </DataTable.Row>
            )}
          />
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};
