import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameDetailsScreen } from '../screens/GameDetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';

type RootStackParamList = {
  Home: undefined;
  GameDetails: { id: number };
};

export type GameDetailsScreenRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;
export type GameDetailsScreenNavigationProp = NavigationProp<RootStackParamList, 'GameDetails'>;

export type GameDetailsProp = {
  route: GameDetailsScreenRouteProp;
  navigation: GameDetailsScreenNavigationProp;
};

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerBlurEffect: 'extraLight',
      }}
    >
      <Stack.Screen name="FreeToPlayGames" component={HomeScreen} />
      <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
    </Stack.Navigator>
  );
};
