import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { GamesList } from '../components/GamesList';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <GamesList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
