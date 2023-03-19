import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wishlist } from '../components/wishlist/Wishlist';

export const WishlistScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={{ padding: 20, backgroundColor: '#000' }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 24 }}>Wishlist</Text>
      </View>
      <Wishlist />
    </SafeAreaView>
  );
};
