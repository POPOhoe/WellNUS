import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Diary = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.profile}>
                Diary
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


export default Diary