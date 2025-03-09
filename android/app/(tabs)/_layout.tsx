import React from 'react'
import { Tabs, Redirect } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import TrackScreen from './TrackScreen';
import MapScreen from './MapScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

type RootTabParamList = {
    Home: undefined;
    Map: undefined;
    Track: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName: string = 'Home';

                            if (route.name === 'Home') {
                                iconName = 'home';
                            } else if (route.name === 'Map') {
                                iconName = 'map';
                            } else if (route.name === 'Track') {
                                iconName = 'route';
                            } else if (route.name === 'Profile') {
                                iconName = 'user';
                            }

                            return <Icon name={iconName} size={size} color={color} />;
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
                    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Tab.Screen name="Map" component={MapScreen} />
                    <Tab.Screen name="Track" component={TrackScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            </Tabs>
        </>
    )
}

export default TabsLayout