import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const Search: React.FC = () => {
  const [searchPhrease, setSearchPhrease] = useState<string>('');

  return (
    <View style={styles.searchbarContainer}>
      <Searchbar
        placeholder="Enter dish name"
        style={{ marginHorizontal: 20 }}
        value={searchPhrease}
        onChangeText={(text) => setSearchPhrease(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    marginTop: 20,
  },
});
