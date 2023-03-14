import { StyleSheet, SafeAreaView } from 'react-native';
import { GamesList } from '../components/GamesList';
import { HomeHeader } from '../components/HomeHeader';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <GamesList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});
