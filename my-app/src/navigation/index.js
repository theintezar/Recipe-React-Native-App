import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CartScreen from '../screens/CartScreen';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Cart' component={CartScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default AppNavigation