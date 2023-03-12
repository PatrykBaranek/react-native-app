import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../constants/routes';
import { WishlistScreen } from '../screens/WishlistScreen';
import { GameDetailsScreen } from '../screens/GameDetailsScreen';

const Stack = createNativeStackNavigator();

export const WishlistStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.WISHLIST} component={WishlistScreen} />
      <Stack.Screen name={ROUTES.GAMES_DETAILS} component={GameDetailsScreen} />
    </Stack.Navigator>
  );
};
