import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Logout from './screens/Logout';
import { Ionicons } from '@expo/vector-icons';

const Header = ({title, navigation}) => {
    return (
      // <View style = {styles.header}>
      //   {goBack && <Entypo
      //     name = 'chevron-left'
      //     size = {25}
      //     onPress = {goBack}
      //     style = {styles.icon}
      //   />}    
      //   <Text style = {styles.text}>{title}</Text>
      //   {logout && <Logout/>}
      // </View>
      <View style = {styles.header}>
        <StatusBar backgroundColor = '#009387' barStyle = 'light-content'/>
        <TouchableOpacity style = {styles.icon}>
          <Ionicons
            name="menu" 
            size={30}  
            color="black"
            onPress = {() => navigation.openDrawer()}
          />
        </TouchableOpacity>
        
        <Text style = {styles.text}>
          {title}
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      height: 60,
      padding: 15,
      backgroundColor: 'darkslateblue',
      alignItems: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'right' 
    },
    icon: {
      position: 'absolute',
      left: 25
    }
  })

export default Header