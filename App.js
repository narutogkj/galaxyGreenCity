import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from "./src/navigation/Tabs";
import Restaurant from './src/screens/Restaurant';
import LogIn from './src/screens/LogIn';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
