import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import firebase from './../../firebase/fire';

const SignUp = ({navigation}) => {
    
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const signUp = async() => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            navigation.navigate('Login')
        } catch (err) {
            setError(err.message)
        }
        
    }
    
    const goBack = () => {
        navigation.navigate('Login')
    }

    return (
        <View style = {styles.view}>
            <Text style = {styles.text}>Sign Up</Text>
            <TextInput
                 
                placeholder = 'Create Your Username'
                style = {styles.textInput}
                autoCapitalize = 'none'
                
            />
            <TextInput 
                value = {email}
                placeholder = 'Enter Your Email'
                style = {styles.textInput}
                autoCapitalize = 'none' 
                onChangeText = {setEmail} 
            />
            <TextInput 
                value = {password}
                placeholder = 'Create a Password'
                style = {styles.textInput}
                secureTextEntry = {true}
                autoCapitalize = 'none'
                onChangeText = {setPassword} 
            />
            {
                error ? <Text style = {{color: 'red'}}>{error}</Text> : null
            }
            <View style = {styles.back}>
                <Button
                    title = 'Create account'
                    onPress = {signUp}
                />
            </View>
            
            <TouchableOpacity onPress = {goBack}>
                <Text>Already have an account? Tap here to sign in</Text>
            </TouchableOpacity>
            
        </View>
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
        fontSize: 20,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '55%'
    },
    back: {
        fontSize: 18,
        paddingVertical: 10,
        paddingBottom: 10
    },
    touchable: {
        backgroundColor: '#f8f8f8'
    }
})

export default SignUp