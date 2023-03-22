import React from 'react';
import { CatalogGamesRenderer } from '../components/gamelist/CatalogGamesRenderer';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CatalogScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <CatalogGamesRenderer />
    </SafeAreaView>
  );
};
