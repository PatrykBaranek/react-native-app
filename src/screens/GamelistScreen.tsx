import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gamelist } from '../components/gamelist/Gamelist';

export const GamelistScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Gamelist />
    </SafeAreaView>
  );
};
