import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';



const BasicScreen = ({navigation}) => {
    const goBack = () => {
        navigation.navigate('Home_Page')
      }
  
      return (
        <View>
          <Header title = 'Basics Of Meditation' goBack = {goBack}/>
  
          <Text style = {{fontSize: 25}}>
            *Add some basic mediation info here LOL*
          </Text>
          <Text style = {{fontSize: 25}}>
            *Benefits and stuff i guess*
          </Text>
          <Text style = {{fontSize: 25}}>
            *Maybe some pictures of pple ohming*
          </Text>
        </View>
        
      )
}

export default BasicScreen