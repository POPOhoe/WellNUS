import React from 'react'
import {Text, View, StatusBar, Image, StyleSheet} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

const Onboard = ({pressDone}) => {
    const data = [
        {
          title: "Meditation",
          text: "Start on your meditation journey with WellNUS TODAY!",
          image: require('./../../assets/images/chill_dribbble-01.webp'),
          bg: '#59b2ab',
        },
        {
          title: 'Forum',
          text: 'Connect with your peers with WellNUS!',
          image: require('./../../assets/images/Onboarding-img1.jpeg'),
          bg: '#febe29',
        },
      ];

    const renderDoneButton = () => {
        return (
            <View>
                <Text>Done</Text>
            </View>
        )
    }

    const renderNextButton = () =>{
        return (
            <View>
                <Text>Next</Text>
            </View>
        )
    }

    const renderPrevButton = () => {
        return (
            <View>
                <Text>Prev</Text>
            </View>
        )
    }

    const renderItem = ({item}) => {
        return (
            <View style = {styles.slide}>
                <Image source = {item.image} style = {styles.image}/>
                <View>
                    <Text style = {styles.title}>{item.title}</Text>
                    <Text style = {styles.text}>{item.text}</Text>
                </View>
            </View>
        )
    }

    const keyExtractor = (item) => item.title


    return (
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton = {renderDoneButton}
          renderNextButton = {renderNextButton}
          renderPrevButton = {renderPrevButton}
          showPrevButton
          data={data}
          onDone = {pressDone}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8ff',
    },
    image: {
      padding: 10,
      width: 150,
      height: 150,
    }, 
    title: {
      fontSize: 24,
      color: '#000000',
      textAlign: 'center',
      marginHorizontal: 60
    },
    text: {
      fontSize: 14,
      color: '#808080',
      textAlign: 'center',
      marginHorizontal: 60, 
      marginTop: 20
    }
  })

export default Onboard


