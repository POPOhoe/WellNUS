import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../components/screens/HomePage';
import BasicScreen from '../components/screens/BasicScreen';
import StressRelief from '../components/screens/StressRelief';
import SleepScreen from '../components/screens/SleepScreen';
import Forum from '../components/screens/Forum';
import DrawerContent from '../components/DrawerContent';
import ProfileScreen from '../components/screens/ProfileScreen';
import SettingsScreen from '../components/screens/SettingsScreen';

const AppStack = ({userLogout}) => {

    const bottomTab = createBottomTabNavigator()

    const Drawer = createDrawerNavigator()

    function Home_Page({navigation}) {
        return (
            <HomePage navigation = {navigation} userLogout = {userLogout} />
        )
    }

    //Learn the basics screen
    function Basics({navigation}) {
        return (
            <BasicScreen navigation = {navigation}/>
        )
    }

    // For sleep screen
    function sleep({navigation}) {
        return (
            <SleepScreen navigation = {navigation} />
        )
    }
    
    //Stress relief screen
    function stress({navigation}) {
        return (
            <StressRelief navigation = {navigation} />
        )
    }

    //forum screen
    function forum({navigation}) {
        return (
            <Forum navigation = {navigation} />
        )
    }

    //Profile screen
    function profile () {
        return (
            <ProfileScreen />
        )
    }

    //Settings screen
    function settings() {
        return (
            <SettingsScreen />
        )
    }

    function tabNavigator() {
        return (
            <bottomTab.Navigator>
                <bottomTab.Screen 
                    name = 'Home_Page'
                    component = {Home_Page}
                />
                <bottomTab.Screen
                    name = 'Basics'
                    component = {Basics}
                /> 

                <bottomTab.Screen
                    name = 'Sleep'
                    component = {sleep}
                />      

                <bottomTab.Screen
                    name = 'Stress'
                    component = {stress}
                />  

                <bottomTab.Screen
                    name = 'Forum'
                    component = {forum}
                /> 
            </bottomTab.Navigator>
        )
    }

    return (
        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} />}>
            <Drawer.Screen name = 'Home' component = {tabNavigator} />
            <Drawer.Screen name = 'Profile' component = {profile} />
            <Drawer.Screen name = 'Settings' component = {settings} />
        </Drawer.Navigator>
    )
}

export default AppStack
