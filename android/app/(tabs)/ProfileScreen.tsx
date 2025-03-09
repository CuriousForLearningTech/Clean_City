import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Profile</Text>
            <Text style={styles.text}>Manage your personal information here.</Text>
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

export default ProfileScreen;
