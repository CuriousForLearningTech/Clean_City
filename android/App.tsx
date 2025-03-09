import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/auth/login';
import { SignIn } from 'phosphor-react-native';
import SignUpScreen from './screens/auth/Signup';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import TrackScreen from './screens/TrackScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});
type RootTabParamList = {
  Home: undefined;
  Map: undefined;
  Track: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Map') {
              iconName = 'map';
            } else if (route.name === 'Track') {
              iconName = 'route';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <Icon name={'home'} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#205781',
          tabBarInactiveTintColor: '#4F959D',
          tabBarStyle: {
            backgroundColor: '#F6F8D5',
            borderTopWidth: 0,
            elevation: 10,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Track" component={TrackScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      {/* <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={SignUpScreen} options={{ headerShown: false }} />
      </Stack.Navigator> */}
    </NavigationContainer>

  );
}
