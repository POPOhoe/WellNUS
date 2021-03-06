import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.profile}>
                Settings
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        fontSize: 30
    }
})


export default SettingsScreen