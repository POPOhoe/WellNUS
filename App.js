import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginStack from './stacks/LoginStack';
import AppStack from './stacks/AppStack';
import { AuthContext } from './components/Context';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './firebase/fire';

const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  const [userToken, setUserToken] = useState('')

  const [error, setError] = useState(null)

  const authContext = useMemo(() => ({
    setUser: () => {
      setUserToken('email')
    },
    signOut: async() => {
      await AsyncStorage.removeItem('userToken')
      setUserToken('')
    },
    signUp: async (email, password) => {
      try {
        setError('')
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await AsyncStorage.setItem('userToken', 'loggedIn')
        setUserToken('email')
      } catch (err) {
        setError(err.message)
      }
    },
    displayError: () => {
      if (error) {
        console.log('theres an error')
        return JSON.stringify(error)
      } else {
        console.log('theres no error')
        return null
      }      
    }
  }), [])

  const load = async() => {
    try {
      const token = await AsyncStorage.getItem('userToken')
      if (token !== null) {
        setUserToken(token)
      }
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    load()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size = 'large' color = 'black'/>
      </View>
    )
  }

  

  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        {userToken ?
          <AppStack /> :
          <LoginStack />
        }
      </NavigationContainer>
    </AuthContext.Provider>
     
  )
}

export default App


