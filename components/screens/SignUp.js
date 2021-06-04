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
import { AuthContext } from '../Context'
import { set } from 'react-native-reanimated';

const SignUp = ({navigation}) => {
    
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [data, setData] = useState({
        email: null,
        password: null,
        confirmPassword: null,
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
        isValid: true,
        error: null
    })

    const { signUp } = useContext(AuthContext)

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

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        })
    }


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        })
    }

    const register = async() => {
        setData({
            ...data, 
            error: null,
        })
        if (data.password !== null && data.email !== null) {
            if (data.password === data.confirmPassword) {
                try {
                    await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                    await AsyncStorage.setItem('userToken', 'loggedIn')
                    setUser()
                } catch (err) {
                    const errorMessage = err.message
                    setData({
                        ...data,
                        error: errorMessage
                    })
                }
                
            } else {
                console.log('helloo')
                setData({
                ...data,
                    error: 'Passwords do not match',
                    isValid: false
                })
            }
        } else {
            setData({
                ...data,
                error: 'Please fill up all the fields',
                isValid: false
            })
        }
    }

    const updateError = () => {
        const err = displayError()
        setData({
            ...data,
            error: err
        })
        
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

                <Text style = {[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style = {styles.action}>
                    <Feather name="lock" size={20} color="#05375a" />   
                    <TextInput 
                        placeholder = 'Confirm your Password'
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                        secureTextEntry = {data.confirmSecureTextEntry}
                        onChangeText = {(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress = {() => updateConfirmSecureTextEntry()}
                    >
                        {data.confirmSecureTextEntry ?
                            <Feather name = "eye-off" size = {20} color = "grey" />
                            :
                            <Feather name = "eye" size = {20} color = "grey" />
                        }
                        
                    </TouchableOpacity>
                </View>

                {data.isValid ? null : 
                <Animatable.View
                    animation = 'fadeInLeft'
                    duration = {500}
                >
                    <Text style = {styles.errorMsg}>{data.error}</Text>
                </Animatable.View>
                }

                <View style = {styles.button}>
                    <TouchableOpacity
                        style = {styles.signIn}
                        onPress = {() => {
                            register()
                        }}
                    >
                        <LinearGradient
                            colors = {['#08d4c4', '#01ab9d']}
                            style = {styles.signIn}
                        >
                            <Text style = {[styles.textSign, {color: 'white'}]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {() => navigation.navigate('Login')}
                        style = {[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1, 
                            marginTop: 15
                        }]}
                    >
                    
                        <Text style = {[styles.textSign, {color: 'black'}]}>
                            Already have an account? Click here to sign in.
                        </Text>
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
        marginTop: 50
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

// const styles = StyleSheet.create({
//     view: {
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingVertical: '50%'
//     },
//     text: {
//         fontSize: 30,
//         paddingVertical: 10
//     },
//     textInput: {
//         fontSize: 20,
//         paddingVertical: 10,
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1,
//         width: '55%'
//     },
//     back: {
//         fontSize: 18,
//         paddingVertical: 10,
//         paddingBottom: 10
//     },
//     touchable: {
//         fontSize: 20,
//         paddingVertical: 5,
//         backgroundColor: '#778899',
//         borderRadius: 6,
//         width: 300,
//         alignItems: 'center',
//         margin: 5
//     }
// })

export default SignUp