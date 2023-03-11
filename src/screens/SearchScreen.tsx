import { StyleSheet, SafeAreaView } from 'react-native';
import { Search } from '../components/Search';

export const SearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
