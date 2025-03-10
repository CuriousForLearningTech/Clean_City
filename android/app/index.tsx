import * as SplashScreen from 'expo-splash-screen';
import { View, Text, StyleSheet } from 'react-native';
import "../global.css";
import { Link } from 'expo-router';

// Set the animation options. This is optional.
SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});


export default function App() {
    return (
        <View >
            <Text className='bg-red-700 text-white text-3xl font-light' >
                Hello Setup
            </Text>
            <Link href="/(auth)/login" style={{ color: 'blue' }}> home</Link>
        </View>
    );
}