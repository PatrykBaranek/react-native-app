import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

interface SummaryItemProps {
  label: string;
  value: string | number;
}

export const SummaryItem: React.FC<SummaryItemProps> = ({ label, value }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: '#fff', textAlign: 'center' }} variant="bodyLarge">
        {label}
      </Text>
      <Text style={{ color: '#fff', textAlign: 'center' }} variant="bodyLarge">
        {value}
      </Text>
    </View>
  );
};
