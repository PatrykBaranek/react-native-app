import React from 'react';
import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SummaryHeader } from './SummaryHeader';
import { SummaryList } from './SummaryList';
import { IconButton } from 'react-native-paper';
import { logout } from '../../app/loginSlice/loginSlice';

export type SummaryType = {
  id: number;
  label: string;
  value: string | number;
};

export const Summary = () => {
  const dispatch = useAppDispatch();
  const totalGames = useAppSelector((state) => {
    let count = 0;
    state.gamelist.catalogs.forEach((catalog) => (count += catalog.games.length));

    return count;
  });
  const totalCatalogs = useAppSelector((state) => state.gamelist.catalogs.length);
  const catalogWithMostGames = useAppSelector((state) => {
    if (state.gamelist.catalogs.length === 0) return 0;

    return state.gamelist.catalogs.reduce((maxCatalog, currentCatalog) =>
      currentCatalog.games.length > maxCatalog.games.length ? currentCatalog : maxCatalog
    );
  });

  const summaryItems: SummaryType[] = [
    {
      id: 1,
      label: 'Total added game count',
      value: totalGames,
    },
    {
      id: 2,
      label: 'Total catalog count',
      value: totalCatalogs,
    },
    {
      id: 3,
      label: 'Catalog with most of games',
      value: catalogWithMostGames === 0 ? '' : catalogWithMostGames.name,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SummaryHeader />
      <View
        style={{
          flex: 1,
          padding: 10,
          marginTop: 50,
        }}
      >
        <SummaryList summaryItems={summaryItems} />
      </View>
      <IconButton icon="logout" onPress={() => dispatch(logout())} />
    </View>
  );
};
