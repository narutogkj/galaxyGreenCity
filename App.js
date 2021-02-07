import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import stacks from './src/navigation/stacks'
import drawer from './src/navigation/drawer';
import LogIn2 from './src/screens/LogIn2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


function App() {
  const [isLogged, setLogin] = useState(false);

  const getData = async () => {
    try {
      return await AsyncStorage.getItem('@credentials')
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {

    getData().then((value) => {
      if (value) {
        setLogin(true)
      }
    })
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn2" component={LogIn2} />
        <Stack.Screen name="drawer" component={drawer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
