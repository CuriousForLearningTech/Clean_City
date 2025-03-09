import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text className='text-xl' >Welcome to Home</Text>
            <Text style={styles.text}>This is your home screen.</Text>
            <Link href="/home"> Home</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F8D5',
    },
    header: {
        fontSize: 32,
        color: '#205781',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        color: '#4F959D',
    },
});

export default HomeScreen;
