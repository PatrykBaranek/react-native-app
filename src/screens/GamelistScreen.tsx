import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gamelist } from '../components/gamelist/Gamelist';

export const GamelistScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={{ padding: 20, backgroundColor: '#000' }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 24 }}>Gamelist</Text>
      </View>
      <Gamelist />
    </SafeAreaView>
  );
};
