import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
const Tab = createBottomTabNavigator();
const TabNavigator = () =>(
  <Tab.Navigator  
  tabBarOptions={{
    activeBackgroundColor:"tomato",
    activeTintColor:"white",
    inactiveBackgroundColor:"#eee",
    inactiveTintColor:"black"
  }} >
    <Tab.Screen options={{
      tabBarIcon:({size, color})=> <MaterialCommunityIcons name="home" color={color} size={size} />
    }} name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
 </Tab.Navigator>
)
const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View tweets" onPress={() => navigation.navigate("TweetDetails", {id:1})} />
  </Screen>
)
const Account = ({navigation}) => (
  <Screen>
    <Text>Account</Text>
    <Button title="Account" onPress={() => navigation.goBack()} />
  </Screen>
)
const TweetDetails = ({navigation, route}) => (
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
    <Button title="Back" onPress={() => navigation.goBack()} />
  </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () =>(

  <Stack.Navigator screenOptions={{
     headerStyle:{backgroundColor:"tomato"},
  headerTintColor:"white",
  }}>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
)


export default function App() {
  return (
  <NavigationContainer theme={navigationTheme}>
    <AppNavigator />
  </NavigationContainer>
  )
}