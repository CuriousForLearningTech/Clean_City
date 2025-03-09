import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import TrackScreen from './TrackScreen';
import ProfileScreen from './ProfileScreen';


type RootTabParamList = {
    Home: undefined;
    Map: undefined;
    Track: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
};

export default Navigator;
