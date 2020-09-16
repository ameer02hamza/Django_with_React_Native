import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import { color } from 'react-native-reanimated'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.cont}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={30} />
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor:colors.primary,
        height:80,
        width:80,
        borderRadius:40,
        bottom:20,
        borderColor:colors.white,
        borderWidth:10,
        alignItems:"center",
        justifyContent:"center"
    }
})
