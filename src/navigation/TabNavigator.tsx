import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackScreen } from './HomeStackScreen';
import { ROUTES } from '../constants/routes';
import { WishlistScreen } from '../screens/WishlistScreen';
import Iconicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === ROUTES.HOME) {
              return <Iconicons name="home" size={size} color={color} />;
            } else if (route.name === ROUTES.WISHLIST) {
              return <Iconicons name="list" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
          },
          lazy: true,
          headerPressOpacity: 20,
          headerTransparent: true,
          headerTitle: '',
        })}
      >
        <Tab.Screen name={ROUTES.HOME} component={HomeStackScreen} />

        <Tab.Screen name={ROUTES.WISHLIST} component={WishlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
