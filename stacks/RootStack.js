import React, { useState, useEffect }from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginStack from './LoginStack'
import AppStack from './AppStack'

const RootStack = () => {
    const [userToken, setUserToken] = useState(false)

    const userLogin = () => {
        setUserToken(true)
    }

    const userLogout = () => {
        setUserToken(false);
        console.log('Hello')
    }

    const checkUser = async () => {
        const user = await AsyncStorage.getItem('user')
    
        if (user !== null) {
            setUserToken(true)
        } else {
            setUserToken(false)
        }
    }

    useEffect(() => {
        checkUser()
    })

    return (
        
        <NavigationContainer>
            {!userToken &&
                <LoginStack userLogin = {userLogin} />
            }
            {userToken &&
                <AppStack userLogout = {userLogin}/>
            }
        
        </NavigationContainer>          
        
    )
}

export default RootStack
