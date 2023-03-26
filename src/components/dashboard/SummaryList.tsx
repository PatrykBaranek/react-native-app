import React from 'react';
import { FlatList } from 'react-native';
import { SummaryType } from './Summary';
import { SummaryItem } from './SummaryItem';

interface SummaryListProps {
  summaryItems: SummaryType[];
}

export const SummaryList: React.FC<SummaryListProps> = ({ summaryItems }) => {
  return (
    <FlatList
      data={summaryItems}
      renderItem={({ item }) => <SummaryItem label={item.label} value={item.value} />}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
      }}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
