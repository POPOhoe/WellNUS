import React, { setEffect } from 'react'
import { View } from 'react-native';
import Header from './../Header';
import firebase from './../../firebase/fire';
import firestore from '@react-native-firebase/firestore';

const Forum = ({navigation}) => {
    const goBack = () => {
        navigation.navigate('Home_Page')
      }

      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user.displayName) {
      //     console.log('User email: ', user.email);
      //   } else {
      //     console.log('no username')
      //   }
      // });

      const test = async () => {
        const userDoc = await firestore().collection('users').doc(ebppa5vrlyzKEvHQgNJQ).get()
        console.log(userDoc)
      }
      
      
      
      return (
        <View>
          <Header title = 'Forum' goBack = {goBack} />
        </View>
        
      )
}

export default Forum