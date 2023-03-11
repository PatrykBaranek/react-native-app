import { SafeAreaView, StyleSheet, Text, FlatList, ListRenderItemInfo } from 'react-native';
import { Header } from '../components/Header';
import { NavigationProps } from '../navigation/HomeStackScreen';
import { FTPGames, useGetGamesQuery } from '../api/freeToPlayapi';

export const HomeScreen = ({ route, navigation }: NavigationProps) => {
  const { data: games, isLoading } = useGetGamesQuery();

  const renderItems = ({ item }: ListRenderItemInfo<FTPGames>) => <Text>{item.title}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={route} />
      <FlatList data={games} renderItem={renderItems} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
