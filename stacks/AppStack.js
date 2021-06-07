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
import HomeStack from './HomeStack'

const AppStack = () => {

    const bottomTab = createBottomTabNavigator()

    const Drawer = createDrawerNavigator()

    function tabNavigator() {
        return (
            <bottomTab.Navigator
                tabBarOptions = {{
                    showLabel: false,
                    style: {
                        position: 'absolute',
                        backgroundColor: '#fff',
                        borderRadius: 15 
                    }
                }}
            >
                <bottomTab.Screen 
                    name = 'Home'
                    component = {HomeStack}
                />
                <bottomTab.Screen
                    name = 'Basics'
                    component = {BasicScreen}
                /> 

                <bottomTab.Screen
                    name = 'Sleep'
                    component = {SleepScreen}
                />      

                <bottomTab.Screen
                    name = 'Stress'
                    component = {StressRelief}
                />  

                <bottomTab.Screen
                    name = 'Forum'
                    component = {Forum}
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

export default AppStack
