import React, { useContext }from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../components/screens/Onboard';
import Onboard2 from '../components/screens/Onboard2';
import SignUp from '../components/screens/SignUp';
import Login from '../components/screens/Login';

const LoginStack = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator 

            screenOptions = {{
                header: () => null
            }}>

            <Stack.Screen 
                name = 'onboard'
                component = {Onboard}
            />
        
            <Stack.Screen 
                name = 'onboard2'
                component = {Onboard2}
            />

            <Stack.Screen 
                name = 'Login'
                component = {Login}
            />

            <Stack.Screen 
                name = 'Signup'
                component = {SignUp}
            /> 
                    
        </Stack.Navigator> 
    )
}

export default LoginStack
