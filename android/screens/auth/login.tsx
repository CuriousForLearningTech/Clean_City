import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, { Path } from 'react-native-svg';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
            //   source={require('./assets/background.png')}  // Optional background image
            style={styles.container}
        >
            <View style={styles.form}>
                <Text style={styles.header}>Login</Text>

                {/* Email Input */}
                <View style={styles.inputWrapper}>
                    <Icon name="user" size={20} color="#205781" style={styles.icon} />
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#205781"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={20} color="#205781" style={styles.icon} />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#205781"
                    />
                </View>

                {/* Login Button */}
                <TouchableOpacity style={styles.button} onPress={() => { /* Handle login */ }}>
                    <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <TouchableOpacity onPress={() => { /* Navigate to Sign-Up Screen */ }}>
                    <Text style={styles.linkText}>
                        Don't have an account?
                    </Text>
                    <Text style={styles.linkText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

            {/* SVG Decoration */}
            <Svg height="100" width="100%" viewBox="0 0 100 100" style={styles.svg}>
                <Path
                    d="M0 100 L100 0 L100 100 Z"
                    fill="#4F959D"
                />
            </Svg>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    form: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        backgroundColor: '#F6F8D5',
        borderRadius: 10,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    header: {
        fontSize: 32,
        color: '#205781',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#4F959D',
        marginBottom: 15,
        width: '100%',
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        height: 40,
        fontSize: 16,
        color: '#205781',
    },
    icon: {
        marginRight: 10,
    },
    button: {
        backgroundColor: '#205781',
        width: '100%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 20,
        fontSize: 14,
        color: '#4F959D',
    },
    svg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default LoginScreen;
