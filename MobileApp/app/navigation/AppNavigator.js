import React from 'react'
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import NewListingButton from './NewListingButton';


const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} 
        options={{tabBarIcon:({color,size})=> <MaterialCommunityIcons color={color} size={size} name="home" />}}/>
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} 
        options={({navigation}) =>({
            tabBarButton:() =><NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
            tabBarIcon:({color,size})=> <MaterialCommunityIcons 
        color={color} size={size} name="plus-circle" />
    })}/>
        <Tab.Screen name="Account" component={AccountNavigator} 
        options={{tabBarIcon:({color,size})=> <MaterialCommunityIcons color={color} size={size} name="account" />}}/>
    </Tab.Navigator>
)
export default AppNavigator