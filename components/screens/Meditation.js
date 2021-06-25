import React, { useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar, 
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

const Meditation = ({navigation}) => {

    const isFocused = useIsFocused()

    useEffect(() => {
        //Update the state you want to be updated
      } , [isFocused])

    return (
        // <ImageBackground
        //     source = {require('./../../assets/images/starry.jpg')}
        //     style = {styles.background}
        // >
        
        <View style = {styles.container}>

            <View style = {styles.header}>
                <TouchableOpacity 
                    onPress = {() => {navigation.openDrawer()}} 
                >
                <Ionicons 
                    name="menu"    
                    size={30} 
                    color="white" 
                />
                </TouchableOpacity>
            </View>

            {isFocused &&
            <Animatable.View 
                animation = 'fadeInUpBig'
                style = {styles.scrollView}
            >
            <ScrollView 
                vertical
                showsVerticalScrollIndicator = {false}
                style = {styles.scroll}
            >

                <ImageBackground
                    source = {require('./../../assets/images/earth.jpg')}
                    style = {styles.imageBackground}
                >   
                    <View style = {styles.mainTextView}>
                        <Text style = {styles.mainText}>Relax and Unwind</Text>
                    </View>
                    
                </ImageBackground>

                <TouchableOpacity
                    activeOpacity = {0.7}
                    onPress = {() => navigation.push('Sleep')}
                >

                    <View style = {styles.imageView}>
                        
                    <Image 
                        source = {require('./../../assets/images/moon.jpg')}
                        style = {styles.image}
                    />
                    
                    <View style = {styles.imageText}>
                        <Text style = {styles.text}>Need Better Sleep?</Text>
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
                        <Text style = {styles.text}>Stress Free!</Text>
                    </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity = {0.7}
                >
                    <View style = {styles.imageView}>
                        
                    <Image 
                        source = {require('./../../assets/images/productive.jpg')}
                        style = {styles.image}
                    />
                    
                    <View style = {styles.imageText}>
                        <Text style = {styles.text}>Get Productive</Text>
                    </View>
                    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity = {0.7}
                >
                    <View style = {styles.imageView}>
                        
                    <Image 
                        source = {require('./../../assets/images/productive.jpg')}
                        style = {styles.image}
                    />
                    
                    <View style = {styles.imageText}>
                        <Text style = {styles.text}>Get Productive</Text>
                    </View>
                    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity = {0.7}
                >
                    <View style = {styles.imageView}>
                        
                    <Image 
                        source = {require('./../../assets/images/productive.jpg')}
                        style = {styles.image}
                    />
                    
                    <View style = {styles.imageText}>
                        <Text style = {styles.text}>Get Productive</Text>
                    </View>
                    
                    </View>
                </TouchableOpacity>
          
          
            </ScrollView>
            </Animatable.View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    profile: {
        fontSize: 30
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0, 
        bottom: 0,
        left: 0
    },
    background: {
        width: '100%',
        height: '100%'
    },
    header: {
        marginTop: 30,
        paddingHorizontal: 30,
        marginBottom: 10,
        
    },
    scroll: {
        marginBottom: 50,
    },
    scrollView: {
        justifyContent: 'center',
        // backgroundColor: '#663399',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    imageView: {
        backgroundColor: 'transparent',
        height: 150,
        width: '90%',
        borderRadius: 15,
        padding: 5,
        marginLeft: '5%',
        marginTop: 10,
        flexDirection: 'row'
    },
    image: {
        width: 150,
        marginLeft: '2.5%',
        marginTop: 10,
        borderRadius: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-start' 
    },
    imageText: {
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 10,
        
    },
    text: {
        fontSize: 20,
        fontFamily: 'RobotoSlab',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    imageBackground: {
        width: '100%',
        height: 300,
        borderRadius: 15
    },
    mainText: {
        fontSize: 30,
        // fontFamily: 'RobotoSlab',
        color: 'white'
    },
    mainTextView: {
        alignItems: 'center'
    }
})


export default Meditation