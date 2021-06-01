import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useContext} from 'react'
import { Text, View, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native'
import firebase from './../../firebase/fire';

const Login = ({navigation, userLogin}) => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const startLoading = () => {
        setIsLoading(true)
    }
    
    const finishLoading = () => {
        setIsLoading(false)
    }

    const login = async() => {
        startLoading()
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            await AsyncStorage.setItem('user', 'loggedIn')
            userLogin()
            finishLoading()
            navigation.navigate('Home_Page')
        } catch (err) {
            finishLoading()
            setError(err.message)
        }
        
    }

    const pressSignUp = () => {
        navigation.navigate('Signup')
    }

    return ( 
        <>
        {isLoading &&
            <View style = {styles.loading}>
                <ActivityIndicator 
                    size = 'large' 
                    style = {styles.loading}
                    color = '#0000ff'/>
            </View>
               
            
        }

        {!isLoading && 
            <View style = {styles.view}>
                <Text style = {styles.text}>Welcome to WellNUS</Text>
                <TextInput 
                    value = {email}
                    placeholder = 'email'
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText = {setEmail} 
                />
                <TextInput 
                    value = {password}
                    placeholder = 'Password'
                    style = {styles.textInput}
                    secureTextEntry = {true}
                    autoCapitalize = 'none' 
                    onChangeText = {setPassword}
                />
                {
                    error ? <Text style = {{color: 'red'}}>{error}</Text> : null
                }
                <View style = {styles.button}>
                    <Button 
                        title = 'Login' 
                        onPress = {login}
                    />
                </View>
                
                <View style = {styles.signUp}>
                    <Text>Don't have an account? Click here to sign up</Text>
                </View>            
                <Button 
                    title = 'Sign up'
                    onPress = {pressSignUp}
                />
                
            </View>
        }
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '50%'
    },
    text: {
        fontSize: 30,
        paddingVertical: 10
    },
    textInput: {
        fontSize: 25,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '55%'
    },
    touchable: {
        fontSize: 20,
        paddingVertical: 10
    },
    button: {
        marginTop: 20
    },
    signUp: {
        paddingTop: 10,
        paddingBottom: 10
    },
    loading: {
        justifyContent: 'center',
        paddingTop: '45%'
    }
})

export default Login