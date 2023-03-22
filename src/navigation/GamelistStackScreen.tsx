import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GamelistScreen } from '../screens/GamelistScreen';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { CatalogScreen } from '../screens/CatalogScreen';
import { ROUTES } from '../constants/routes';

type RootStackParamList = {
  Gamelist: undefined;
  Catalog: { id: string };
};

export type GamelistScreenRouteProp = RouteProp<RootStackParamList, 'Catalog'>;
export type GamelistScreenNavigationProps = NavigationProp<RootStackParamList, 'Catalog'>;

export type GamelistProps = {
  route: GamelistScreenRouteProp;
  navigation: GamelistScreenNavigationProps;
};

const Stack = createNativeStackNavigator();

export const GamelistStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.GAMELIST}>
      <Stack.Screen name={ROUTES.GAMELIST} component={GamelistScreen} />
      <Stack.Screen name={ROUTES.CATALOG} component={CatalogScreen} />
    </Stack.Navigator>
  );
};
