import { StyleSheet, SafeAreaView } from 'react-native';
import { GamesList } from '../components/home/GamesList';
import { HomeHeader } from '../components/home/HomeHeader';

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
    backgroundColor: '#000',
  },
});
