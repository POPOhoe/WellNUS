import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../components/screens/Onboard'
import SignUp from '../components/screens/SignUp'
import Login from '../components/screens/Login'

const LoginStack = ({userLogin}) => {

    const Stack = createStackNavigator()

    //Onboard sliders
    function onboard({navigation}) {
        return (
            <Onboard pressDone = {() => navigation.navigate('Login') }/>
        )
    }

    //Login Screen
    function Login_Screen({navigation}) {
        return (
            <Login navigation = {navigation} userLogin = {userLogin}/>
        )
    }

    //signup screen
    function signUp({navigation}) {
        return (
            <SignUp navigation = {navigation} />
        )
    }

    return (
        <Stack.Navigator 

            screenOptions = {{
                header: () => null
            }}>

            <Stack.Screen 
                name = 'onboard'
                component = {onboard}
            />
        
        
            <Stack.Screen 
                name = 'Login'
                component = {Login_Screen}
            />

            <Stack.Screen 
                name = 'Signup'
                component = {signUp}
            /> 
                    
        </Stack.Navigator> 
    )
}

export default LoginStack
