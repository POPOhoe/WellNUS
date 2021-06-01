import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect }from 'react';
import { View } from 'react-native';
import Header from './../Header';
import Tab from './../Tab';

const HomePage = ({navigation, userLogout}) => {

    const pressBasics = () => {
        navigation.navigate('Basics')
    }
  
    const pressSleep = () => {
      navigation.navigate('Sleep')
    }
  
    const pressStress = () => {
      navigation.navigate('Stress')
    }
  
    const pressForum = () => {
      navigation.navigate('Forum')
    }
  
    const pressLogout = async () => {
      await AsyncStorage.removeItem('user')
      userLogout()
      
  }

    return (
    <View>
        <Header title = 'WellNUS'/>
        <Tab type = 'Learn The Basics' onPress = {pressBasics}/>
        <Tab type = 'For Sleep' onPress = {pressSleep}/>
        <Tab type = 'Stress Relief' onPress = {pressStress}/>
        <Tab type = 'Forum' onPress = {pressForum} />
        <Tab type = 'Logout' onPress = {pressLogout} />
    </View>
    )
}

export default HomePage