import React from 'react';
import HomePage from '../components/screens/HomePage';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// add the cards into homepage.js
// add where the cards navigate to into the stack here

const HomeStack = ({navigation}) => {

    const Home = createStackNavigator()
    // headerStyle: {
    //     backgroundColor: 'transparent'
    // },
    // headerTintColor: '#009387',
    // headerTitleStyle: {
    //     fontWeight: 'bold'
    // }
    
    return (
        <Home.Navigator screenOptions = {{
            headerShown: false
        }}>
            <Home.Screen 
                name = 'home'
                component = {HomePage}
                options = {{
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <Ionicons.Button
                            name="menu"    
                            size={24} 
                            color="black"
                            backgroundColor = '#fff'
                            onPress = {() => navigation.openDrawer()}    
                        ></Ionicons.Button>
                    )
                }}
            />
        </Home.Navigator>
    )
}

export default HomeStack