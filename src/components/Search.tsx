import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SearchGamesList } from './SearchGamesList';
import { StatusBar } from 'expo-status-bar';

export const Search: React.FC = () => {
  const [searchPhrease, setSearchPhrease] = useState<string>('');

  return (
    <View>
      <StatusBar hidden={true} />

      <Searchbar
        placeholder="Enter game name"
        style={{ marginHorizontal: 20 }}
        value={searchPhrease}
        onChangeText={(text) => setSearchPhrease(text)}
      />

      <SearchGamesList searchGameTitle={searchPhrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    flex: 1,
    backgroundColor: '#111',
  },
});
