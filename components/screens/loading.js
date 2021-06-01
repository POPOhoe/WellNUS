import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View>
            <ActivityIndicator 
                size = 'large' 
                style = {styles.loading}
                color = '#0000ff'
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    
    loading: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: '45%'
    }

})

export default Loading
