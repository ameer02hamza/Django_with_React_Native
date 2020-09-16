import {createStackNavigator } from "@react-navigation/stack"
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import React from 'react'


const Stack = createStackNavigator();
const AuthNavigator =() =>(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)
export default AuthNavigator;