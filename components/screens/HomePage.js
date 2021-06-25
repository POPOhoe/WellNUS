import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect }from 'react';
import { 
  StatusBar, 
  View, 
  StyleSheet, 
  ImageBackground, 
  TouchableOpacity, 
  ScrollView,
  Image,
  Dimensions 
} from 'react-native';
import { 
  useTheme,
  TouchableRipple,
  Text 
} from 'react-native-paper'
import { createIconSetFromFontello, Ionicons } from '@expo/vector-icons';
import Header from './../Header';
import Tab from './../Tab';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native'
// add the cards that dom wants here, probably talking abt basics
// add the screens that these cards navigate to if any into homestack
const HomePage = ({navigation}) => {

    const theme = useTheme()

    const height = Dimensions.get('window').height

    const width = Dimensions.get('window').width

    const isFocused = useIsFocused()

    return (
      // <ImageBackground
      //         source = {require('./../../assets/images/abstractblue.jpg')}
      //         style = {styles.background}
      // >
        <View style = {styles.container}>
        {/* <StatusBar 
              barStyle = {theme.dark ? 'light-content' : 'dark-content'} 
              backgroundColor = '#00bfff' /> */}
        <View style = {styles.header}>

            <TouchableOpacity 
              onPress = {() => {navigation.openDrawer()}} 
            >
              <Ionicons 
                name="menu"    
                size={30} 
                color="black" 
              />
            </TouchableOpacity>       
        </View>
        
        
        {isFocused &&
        <Animatable.View 
          animation = 'fadeInDownBig'
          duration = {700}
          style = {styles.mainTextHeader}
        >
          <Text style = {styles.mainText}>Welcome to WellNUS, user</Text>
          <Text>Your Everyday Habit For Mental Well-being</Text>
        </Animatable.View>}

        {isFocused && 
        <ScrollView 
          vertical
          showsVerticalScrollIndicator = {false}
          style = {styles.scroll}
        >
          <Animatable.View
            animation = 'bounceIn'
            duration = {2000}
          >
          <TouchableOpacity
            activeOpacity = {0.7}
          >
  
            <View style = {styles.helpCard}>
              <View style = {styles.helpTextView}>
                <Text style = {{fontSize: 18}}>Seeking Help is a sign of</Text>
                <Text style = {{fontSize: 18}}>Strength - not a weakness</Text>
              </View>
              <View style = {styles.imageView}>
                <Image 
                  source = {require('./../../assets/images/happy.png')}
                  style = {styles.image}
                />
              </View>            
            </View>
          </TouchableOpacity>
          
          {/* How are you feeling card */}
          <View style = {{marginTop: 20, marginLeft: 20}}>
            <Text style = {{fontSize: 25}}>How are you feeling Today?</Text>
            <View style = {styles.feelingView}>
              <TouchableOpacity style = {styles.feelingCard}>
                <View style = {styles.feeling}>
                  <Text style = {{fontSize: 22}}>Happy</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Happenings in nus card */}
          <View style = {{marginTop: 20, marginLeft: 20}}>
            <Text style = {{fontSize: 25}}>Happenings in NUS</Text>
          </View>

          <TouchableOpacity style = {styles.happeningsView}>
            <Image 
              source = {require('./../../assets/images/nusmentalhealth.jpg')}
              style = {{
                width: '90%',
                height: 100
              }}
            />
            <View style = {{
              alignSelf: 'flex-start',
              marginLeft: 20,
              marginTop: 10
            }}>
              <Text style = {{fontSize: 20}}>Talks and Workshops For</Text>
              <Text style = {{fontSize: 20}}>World Mental Health Day</Text>
            </View>
          </TouchableOpacity>
         
          </Animatable.View>
          
          
        </ScrollView>}
        </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  background: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 10
  },
  scroll: {
    marginBottom: 0,
    
  },
  helpCard: {
    backgroundColor: '#FEFEFE',
    height: 100,
    width: '90%',
    borderRadius: 30,
    padding: 5,
    marginLeft: '5%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  helpTextView: {
    justifyContent: 'center',
    marginLeft: 10
  },  
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  imageView: {

  },  
  imageText: {
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontFamily: 'RobotoSlab',
  },
  mainTextHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  mainText: {
    fontSize: 25,
  },
  feelingView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  feeling: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  feelingCard: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center'
  },
  happeningsView: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: 10,
    backgroundColor: 'white'
  }

})

export default HomePage