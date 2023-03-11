import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackScreen } from './HomeStackScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import Iconicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <Iconicons name="home" size={size} color={color} />;
            } else if (route.name === 'Details') {
              return <Iconicons name="cog-outline" size={size} color={color} />;
            }
          },

          headerPressOpacity: 20,
          headerTransparent: true,
          headerTitle: '',
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
