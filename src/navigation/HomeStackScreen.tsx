import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from '../screens/DetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';

type RootStackParamList = {
  Home: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
