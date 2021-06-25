import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from '../components/screens/HomePage';
import MeditationStack from './MeditationStack';
import Meditation from '../components/screens/Meditation';
import Diary from '../components/screens/Diary';
import Forum from '../components/screens/Forum';
import DrawerContent from '../components/DrawerContent';
import ProfileScreen from '../components/screens/ProfileScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import HomeStack from './HomeStack'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { Assets } from '@react-navigation/stack';
import MoodTracker from '../components/screens/MoodTracker'
import MoodTrackerStack from './MoodTrackerStack';

const AppStack = () => {

    const bottomTab = createMaterialBottomTabNavigator()

    const Drawer = createDrawerNavigator()

    function tabNavigator() {
        return (
            <bottomTab.Navigator
                initialRouteName="Home"
                activeColor="#e91e63"
                barStyle={{ backgroundColor: '#f5f5f5' }}
            >
                <bottomTab.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                    }}
                />
                <bottomTab.Screen
                    name="Meditation"
                    component={MeditationStack}
                    options={{
                    tabBarLabel: 'Mediation',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="meditation" color={color} size={26} />
                    ),
                    }}
                />
                <bottomTab.Screen
                    name="Diary"
                    component={MoodTrackerStack}
                    options={{
                    tabBarLabel: 'Diary',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open-variant" color={color} size={26} />
                    ),
                    }}
                />
                <bottomTab.Screen
                    name="Forum"
                    component={Forum}
                    options={{
                    tabBarLabel: 'Forum',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                    }}
                />
            </bottomTab.Navigator>
        )
    }

    return (
        
            <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} />}>
                <Drawer.Screen name = 'home' component = {tabNavigator} />
                <Drawer.Screen name = 'Profile' component = {ProfileScreen} />
                <Drawer.Screen name = 'Settings' component = {SettingsScreen} />
            </Drawer.Navigator>
        
        
    )
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10 
    }
})

export default AppStack