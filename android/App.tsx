import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/auth/login';

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
