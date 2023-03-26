import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GamelistScreen } from '../screens/GamelistScreen';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { CatalogScreen } from '../screens/CatalogScreen';

type RootStackParamList = {
  Gameslist: undefined;
  Catalog: { id: string; name: string };
};

export type GamelistScreenRouteProp = RouteProp<RootStackParamList, 'Catalog'>;
export type GamelistScreenNavigationProps = NavigationProp<RootStackParamList, 'Catalog'>;

export type GamelistProps = {
  route: GamelistScreenRouteProp;
  navigation: GamelistScreenNavigationProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const GamelistStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerBlurEffect: 'regular',
      }}
    >
      <Stack.Screen name={'Gameslist'} component={GamelistScreen} />
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};
