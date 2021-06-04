import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useContext} from 'react'
import firebase from './../../firebase/fire';
import {
    Text, 
    View, 
    StatusBar, 
    Image, 
    StyleSheet, 
    Dimensions, 
    TouchableOpacity, 
    Platform,
    TextInput  
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { color } from 'react-native-reanimated';
import { AuthContext } from '../Context';
import { Assets } from '@react-navigation/stack';

const Login = ({navigation}) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        error: null,
        isValidUser : true
    })

    const { signIn } = useContext(AuthContext)
    
    const { displayError } = useContext(AuthContext)

    const { setUser } = useContext(AuthContext)

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val, 
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val, 
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandler = async (email, password) => {
        console.log('yes')
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            await AsyncStorage.setItem('userToken', 'loggedIn')
            setUser()
        } catch (err) {
            const errorMessage = err.message
            setData({
                ...data,
                error: errorMessage,
                isValidUser: false
            })
        }
    }

    return ( 

        <View style = {[styles.container]}>
            <StatusBar backgroundColor = '#009387' barStyle = 'light-content'/>
            <View style = {styles.header}>
                <Text style = {styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View 
                animation = 'fadeInUpBig'
                style = {styles.footer}
            >
                <Text style = {styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                    <FontAwesome name="user-o" size={20} color="#05375a" />   
                    <TextInput 
                        placeholder = 'Enter your Email'
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                        onChangeText = {(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View 
                            animation = 'bounceIn'
                        >
                            <Feather name = "check-circle" size = {20} color = "green" />
                        </Animatable.View>
                        
                    : null }
                    
                </View>

                <Text style = {[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style = {styles.action}>
                    <Feather name="lock" size={20} color="#05375a" />   
                    <TextInput 
                        placeholder = 'Enter your Password'
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                        secureTextEntry = {data.secureTextEntry}
                        onChangeText = {(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress = {() => updateSecureTextEntry()}
                    >
                        {data.secureTextEntry ?
                            <Feather name = "eye-off" size = {20} color = "grey" />
                            :
                            <Feather name = "eye" size = {20} color = "grey" />
                        }
                        
                    </TouchableOpacity>
                </View>
        
                {data.isValidUser ? null : 
                <Animatable.View
                    animation = 'fadeInLeft'
                    duration = {500}
                >
                    <Text style = {styles.errorMsg}>{data.error}</Text>
                </Animatable.View>
                }
                

                <View style = {styles.button}>
                    <TouchableOpacity 
                        onPress = {() => {
                            loginHandler(data.email, data.password)
                        }}
                        style = {styles.signIn}
                    >
                        <LinearGradient
                            colors = {['#08d4c4', '#01ab9d']}
                            style = {styles.signIn}
                        >
                            <Text style = {[styles.textSign, {color: '#fff'}]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('Signup')}
                        style = {[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1, 
                            marginTop: 15
                        }]}
                    >
                        <Text style = {[styles.textSign, {color: '#009387'}]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 25
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    showError: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    }
});

export default Login