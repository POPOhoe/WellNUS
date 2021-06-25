import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Meditation from '../components/screens/Meditation';
import SleepStack from './SleepStack';
import StressRelief from '../components/screens/StressRelief';


const MeditationStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions = {{
                header: () => null
            }}
        >

            <Stack.Screen 
                name = 'meditationHome'
                component = {Meditation}
            />

            <Stack.Screen 
                name = 'Sleep' 
                component = {SleepStack}
            />

            <Stack.Screen 
                name = 'Stress'
                component = {StressRelief}
            />

            <Stack.Screen 
                name = 'Play'
                component = {StressRelief}
            />


        </Stack.Navigator>
    )
}

export default MeditationStack
