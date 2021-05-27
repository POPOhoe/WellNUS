import React from 'react'
import { View } from 'react-native';
import Header from './../Header';
import Tab from './../Tab';

const StressRelief = ({navigation}) => {
    const goBack = () => {
        navigation.navigate('Home_Page')
      }
  
      return (
        <View>
          <Header title = 'For Stress Relief' goBack = {goBack}/>
  
          <Tab type = 'Stress Relief track 1'/> 
          <Tab type = 'Stress Relief track 2'/>
          <Tab type = 'Stress Relief track 3'/>
          <Tab type = 'Stress Relief track 4'/>
      
        </View>
      )
}

export default StressRelief