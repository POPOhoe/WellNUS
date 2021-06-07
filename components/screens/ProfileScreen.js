import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper'

const ProfileScreen = () => {

    const { colors } = useTheme()

    return (
        <View style = {styles.container}>
            <Text style = {[styles.profile, {color: colors.text}]}>
                User profile
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
        fontSize: 30,
    }
})


export default ProfileScreen
