import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from "./src/navigation/Tabs";
import Restaurant from './src/screens/Restaurant';
import LogIn from './src/screens/LogIn';
import LogIn2 from './src/screens/LogIn2';
import Inquiry from './src/screens/Inquiry';
import Agent from './src/screens/Agent';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn2" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn2" component={LogIn2} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Inquiry" component={Inquiry} />
        <Stack.Screen name="Agent" component={Agent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
