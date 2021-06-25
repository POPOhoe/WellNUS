import React from 'react'
import { 
  View, 
  StyleSheet, 
  ImageBackground, 
  Dimensions, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native';
import Header from './../Header';
import Tab from './../Tab';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SleepScreen = ({navigation}) => {
    
  const height = Dimensions.get('window').height

  const width = Dimensions.get('window').width
  
  return  (
    <Animatable.View
      animation = 'fadeInUpBig'
    >
        <ImageBackground 
          style = {[
            styles.topPic, {
              width: width * 0.95, 
              marginLeft: width* 0.025,
              marginTop: 10
            }
          ]}
          source = {require('./../../assets/images/moon.jpg')}
          imageStyle = {{borderRadius: 15}}
        >
          <View style = {styles.backBtn}>
            <Ionicons 
              name="chevron-back-circle-sharp" 
              size={40} 
              color="white"
              onPress = {() => navigation.goBack()} 
            />
          </View>
        </ImageBackground>

        
        <View style = {styles.mainHeader}>
          <Text style = {styles.mainText}>Sleep Better!</Text>
        </View>
        

        <ScrollView  
          vertical
          showsVerticalScrollIndicator = {false}  
          style = {styles.trackList}
        >
          <TouchableOpacity>
            
            <View style = {styles.tab}>
              <View style = {styles.iconView}>
                <FontAwesome name="music" size={50} color="black" />
                <Text style = {styles.trackText}>Sleep Track 1</Text>
              </View>
              {/* <View style = {styles.textView}>
                <Text style = {styles.trackText}>Sleep Track 1</Text>
              </View> */}
              <View style = {styles.playIcon}>
                <Entypo name="controller-play" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>

          

        </ScrollView>
        
        
        
      
  
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backBtn: {
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 10,
  },
  topPic: {
    borderRadius: 15,
    height: 300,
  },
  mainHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30
  },
  mainText: {
    fontSize: 30
  },
  trackList: {
    marginBottom: 60
  },
  tab: {
    backgroundColor: 'purple',
    height: 70,
    width: '90%',
    borderRadius: 15,
    padding: 5,
    marginLeft: '5%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textView: {
    justifyContent: 'center'
  },
  iconView: {
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row'
  },
  trackText: {
    fontSize: 20,
    marginLeft: 20,
  },
  playIcon: {
    justifyContent: 'center',
    marginRight: 20
  }
})
export default SleepScreen