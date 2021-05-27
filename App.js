import React, { useState }from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/screens/Login';
import HomePage from './components/screens/HomePage';
import BasicScreen from './components/screens/BasicScreen'
import StressRelief from './components/screens/StressRelief'
import SleepScreen from './components/screens/SleepScreen'
import Forum from './components/screens/Forum'
import SignUp from './components/screens/SignUp'
import Onboard from './components/screens/Onboard'

const App = () => {

  const [showOnboard, setShowOnboard] = useState(true)

  const onboardHandler = () => {
    setShowOnboard(false)
  }

  const Stack = createStackNavigator();

  //Login Screen
  function Login_Screen({navigation}) {
    return (
      <View>
        <Login navigation = {navigation}/>
      </View>
    )
  }

  //HomePage screen
  function Home_Page({navigation}) {
    return (
      <View>
        <HomePage navigation = {navigation} />
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
      {showOnboard && <Onboard pressDone = {onboardHandler}/>}
      {!showOnboard &&
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions = {{
              header: () => null
            }}>
    
            <Stack.Screen 
              name = 'Login'
              component = {Login_Screen}
            /> 


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

          </Stack.Navigator>
      </NavigationContainer>}
    </>
  )
}

export default App

