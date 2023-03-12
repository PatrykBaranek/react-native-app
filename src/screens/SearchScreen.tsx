import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from '../components/Search';

export const SearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#111' }}>
      <Search />
    </SafeAreaView>
  );
};
