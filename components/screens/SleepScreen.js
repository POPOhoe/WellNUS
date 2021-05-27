import React from 'react'
import { View } from 'react-native';
import Header from './../Header';
import Tab from './../Tab';

const SleepScreen = ({navigation}) => {
    const goBack = () => {
        navigation.navigate('Home_Page')
      }
  
      return  (
        <View>
          <Header title = 'For Sleep' goBack = {goBack}/>
  
          <Tab type = 'Sleep track 1'/>
          <Tab type = 'Sleep track 2'/>
          <Tab type = 'Sleep track 3'/>
          <Tab type = 'Sleep track 4'/>
      
        </View>
      )
}

export default SleepScreen