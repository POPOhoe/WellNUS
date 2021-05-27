import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Tab = ({type, onPress}) => {
    return (

        <TouchableOpacity style = {styles.touch} onPress = {onPress}>
                
            <View style = {styles.view}>
                <Text style = {styles.text}>{type}</Text>
                <Entypo 
                    name = 'chevron-right'
                    size = {25}
                    style = {styles}
                />
            </View>
            
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    touch: {
        padding: 30,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 10,
        borderColor: '#eee'
    },
    text: {
        fontSize: 25
    },
    view: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    }
})

export default Tab