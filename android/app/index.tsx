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
        <View style={styles.container}>
            <Text className='bg-red-700 text-white text-3xl font-light' style={styles.text}>
                Hello Setup
            </Text>
            <Link href="/(tabs)/HomeScreen" style={{ color: 'blue' }}> home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }, text: {
        fontSize: 24,
        fontWeight: 200,
    }
})