import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { useAppSelector } from '../app/hooks';
import { Summary } from '../components/dashboard/Summary';

export const DashboardScreen = () => {
  const username = useAppSelector((state) => state.login.login);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 200 }}>
        <Avatar.Icon size={80} icon="account" />
        <Text variant="displayMedium" style={{ marginTop: 10, color: '#fff' }}>
          {username}
        </Text>
      </View>
      <Summary />
    </SafeAreaView>
  );
};
