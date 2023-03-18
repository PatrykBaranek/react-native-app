import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameDetailsScreen } from '../screens/GameDetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import { GenrePicker } from '../components/home/GenrePicker';

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
        headerShown: false,
      }}
    >
      <Stack.Screen name={'FreeToPlay'} component={HomeScreen} />
      <Stack.Screen name={ROUTES.GAMES_DETAILS} component={GameDetailsScreen} />
    </Stack.Navigator>
  );
};
