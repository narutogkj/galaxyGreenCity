import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../screens/Restaurant';
import LogIn2 from '../screens/LogIn2';
import HomeScreen from '../screens/HomeScreen';
import Inquiry from '../screens/Inquiry';
import Agent from '../screens/Agent';
import About from '../screens/About'


const Stack = createStackNavigator();

const stacks = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Locations of Plots" component={HomeScreen} />
            <Stack.Screen name="1). Amusi Location" component={AmusiScreen} />
            <Stack.Screen name="2). TSM Hospital Location" component={TSMHospitalScreen} />
            <Stack.Screen name="3). Basant Khera Location" component={BasantKheraScreen} />
            <Stack.Screen name="4). Outer Ring Road Location" component={OuterRingRoad} />

            <Stack.Screen name="Our Team" component={About} />
            <Stack.Screen name="Our Agent" component={Agent} />
            <Stack.Screen name="Inquiry" component={Inquiry} />
            <Stack.Screen name="LogIn2" component={LogIn2} />
        </Stack.Navigator>
    );
}

export default stacks;