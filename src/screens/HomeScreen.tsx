import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GamesList } from '../components/GamesList';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
