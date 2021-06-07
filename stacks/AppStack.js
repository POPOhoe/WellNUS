import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../components/screens/HomePage';
import Meditation from '../components/screens/Meditation';
import StressRelief from '../components/screens/StressRelief';
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
                        borderRadius: 15,
                        height: 60 
                    }
                }}
            >
                <bottomTab.Screen 
                    name = 'Home'
                    component = {HomeStack}
                    options= {{
                        tabBarIcon: ({focused}) => (
                            <View style = {styles.icon}>
                                <Ionicons 
                                    name="home-outline" 
                                    size={24} 
                                    color= {focused ? "red" : 'grey'}
                                /> 
                                
                                <Text style = {{fontSize: 15}}>Home</Text>   
                            </View>
                            
                            // <View>

                            
                            // <Pressable>
                            // <LottieView 
                            //     source = {require('../assets/Lottie/home.json')}
                            //     autoPlay = {focused}
                            //     loop = {true}
                            // />
                            // </Pressable>w
                            // </View>
                            
                        
                            
                        )
                    }}
                />
                <bottomTab.Screen
                    name = 'Meditation'
                    component = {Meditation}
                    options= {{
                        tabBarIcon: ({focused}) => (
                            <View style = {styles.icon}>
                                <MaterialCommunityIcons 
                                    name="meditation" 
                                    size={24} 
                                    color= {focused ? "red" : 'grey'}
                                />
                                <Text style = {{fontSize: 15}}>Meditate</Text>   
                            </View>
                            
                        )
                    }}
                /> 

                <bottomTab.Screen
                    name = 'Diary'
                    component = {Diary}
                    options= {{
                        tabBarIcon: ({focused}) => (
                            <View style = {styles.icon}>
                                <Entypo 
                                    name="open-book" 
                                    size={24} 
                                    color= {focused ? "red" : 'grey'}
                                />
                                <Text style = {{fontSize: 15}}>Diary</Text>   
                            </View>
                            
                        )
                    }}
                />  

                <bottomTab.Screen
                    name = 'Forum'
                    component = {Forum}
                    options= {{
                        tabBarIcon: ({focused}) => (
                            <View style = {styles.icon}>
                                <MaterialCommunityIcons 
                                    name="forum-outline" 
                                    size={24} 
                                    color= {focused ? "red" : 'grey'}
                                />
                                <Text style = {{fontSize: 15}}>Forum</Text>   
                            </View>
                            
                        )
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
