import React, { useState }from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import HomePage from './screens/HomePage';
import BasicScreen from './screens/BasicScreen'
import StressRelief from './screens/StressRelief'
import SleepScreen from './screens/SleepScreen'
import Forum from './screens/Forum'
import SignUp from './screens/SignUp'
import Onboard from './screens/Onboard'


const RootStack = () => {
    const [userToken, setUserToken] = useState(false)

    const [finishOnboarding, setFinishOnboarding] = useState(false)

    const userLogin = () => {
        setUserToken(true)
    }

    const userLogout = () => {
        setUserToken(false);
    }

    const Stack = createStackNavigator();

    function onboard({navigation}) {
        return (
            <Onboard pressDone = {() => navigation.navigate('Login') }/>
        )
    }

    //Login Screen
    function Login_Screen({navigation}) {
        return (
        <View>
            <Login navigation = {navigation} userLogin = {userLogin}/>
        </View>
        )
    }

    //HomePage screen
    function Home_Page({navigation}) {
        return (
        <View>
            <HomePage navigation = {navigation} userLogout = {userLogout} />
        </View>
        )
    }

    //Learn the basics screen
    function Basics({navigation}) {
        return (
        <View>
            <BasicScreen navigation = {navigation}/>
        </View>
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

    //signup screen
    function signUp({navigation}) {
        return (
        <SignUp navigation = {navigation} />
        )
    }


    return (
        <>
            <NavigationContainer>
            <Stack.Navigator 
                screenOptions = {{
                header: () => null
                }}>
                {!userToken ?
                    
                    <>
                        <Stack.Screen 
                            name = 'onboard'
                            component = {onboard}
                        />
                    
                    
                        <Stack.Screen 
                            name = 'Login'
                            component = {Login_Screen}
                        />
                    </> :
                    <>
                        <Stack.Screen 
                            name = 'Home_Page'
                            component = {Home_Page}
                        />

                        <Stack.Screen
                            name = 'Basics'
                            component = {Basics}
                        /> 

                        <Stack.Screen
                            name = 'Sleep'
                            component = {sleep}
                        />      

                        <Stack.Screen
                            name = 'Stress'
                            component = {stress}
                        />  

                        <Stack.Screen
                            name = 'Forum'
                            component = {forum}
                        /> 

                        <Stack.Screen
                            name = 'Signup'
                            component = {signUp}
                        />
                    </>
                } 
            </Stack.Navigator>
            </NavigationContainer>          
        </>
    )
}

export default RootStack
