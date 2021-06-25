import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MoodInput from '../components/screens/MoodInput';
import MoodTracker from '../components/screens/MoodTracker';

const MoodTrackerStack = () => {
    
    const Stack = createStackNavigator()
    
    return (
        <Stack.Navigator screenOptions = {{
            headerShown: false
        }}>
            <Stack.Screen 
                name = 'calendar'
                component = {MoodTracker}
            />

            <Stack.Screen 
                name = 'input'
                component = {MoodInput}
            />
        </Stack.Navigator>
    )
}

export default MoodTrackerStack
