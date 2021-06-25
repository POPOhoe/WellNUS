import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SleepScreen from '../components/screens/SleepScreen'
const SleepStack = () => {
    
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            screenOptions = {{
                header: () => null
            }}
        >

            <Stack.Screen 
                name = 'SleepHome'
                component = {SleepScreen}
            />

        </Stack.Navigator>
    )
}

export default SleepStack
