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
import { Ionicons } from '@expo/vector-icons';
import Header from './../Header';
import Tab from './../Tab';
// add the cards that dom wants here, probably talking abt basics
// add the screens that these cards navigate to if any into homestack
const HomePage = ({navigation}) => {

    const theme = useTheme()

    const height = Dimensions.get('window').height

    const width = Dimensions.get('window').width

    return (
      <ImageBackground
              source = {require('./../../assets/images/abstractblue.jpg')}
              style = {styles.background}
      >
        <StatusBar 
              barStyle = {theme.dark ? 'light-content' : 'dark-content'} 
              backgroundColor = '#00bfff' />
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

        <ScrollView 
          vertical
          showsVerticalScrollIndicator = {false}
          style = {styles.scroll}
        >
          <TouchableOpacity
            activeOpacity = {0.7}
          >
            <View style = {styles.imageView}>
                
              <Image 
                source = {require('./../../assets/images/ohm.jpg')}
                style = {styles.image}
              />
            
              <View style = {styles.imageText}>
                <Text style = {styles.text}>Learn the basics of meditation here</Text>
              </View>
            
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity = {0.7}
          >
            <View style = {styles.imageView}>
                
              <Image 
                source = {require('./../../assets/images/flowers_1.jpg')}
                style = {styles.image}
              />
            
              <View style = {styles.imageText}>
                <Text style = {styles.text}>Understand the benefits of meditation</Text>
              </View>
            
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity = {0.7}
          >
            <View style = {styles.imageView}>
                
              <Image 
                source = {require('./../../assets/images/stars.jpg')}
                style = {styles.image}
              />
            
              <View style = {styles.imageText}>
                <Text style = {styles.text}>Your favourites</Text>
              </View>
            
            </View>
          </TouchableOpacity>
         
          
          
          
        </ScrollView>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    marginBottom: 60,
    
  },
  imageView: {
    backgroundColor: '#FEFEFE',
    height: 300,
    width: '90%',
    borderRadius: 15,
    padding: 5,
    marginLeft: '5%',
    marginTop: 10
  },
  image: {
    width: '95%',
    marginLeft: '2.5%',
    marginTop: 10,
    borderRadius: 10,
    height: 200 
  },
  imageText: {
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontFamily: 'RobotoSlab',
  }
})

export default HomePage