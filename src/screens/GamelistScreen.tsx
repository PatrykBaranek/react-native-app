import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gamelist } from '../components/gamelist/Gamelist';
import { AddCatalogButton } from '../components/gamelist/AddCatalogButton';
import { RemoveCatalogButton } from '../components/gamelist/RemoveCatalogButton';

export const GamelistScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Gamelist />
      <AddCatalogButton />
    </SafeAreaView>
  );
};
