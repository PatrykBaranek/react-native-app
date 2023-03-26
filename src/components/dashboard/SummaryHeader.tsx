import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const SummaryHeader = () => {
  return (
    <View>
      <Text variant="titleLarge" style={{ color: '#fff', textAlign: 'center' }}>
        Summary
      </Text>
    </View>
  );
};
