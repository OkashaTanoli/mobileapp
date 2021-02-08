import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import RadiaLGradient from 'react-native-radial-gradient'
import IconI from 'react-native-vector-icons/Ionicons'


function City({name,selectCity,navig}) {

    return (


        <View style={styles.cityView}>
            <TouchableOpacity onPress={()=>selectCity(name,navig)} style={styles.cityTouch} activeOpacity={0.6}>
                <Text style={styles.cityText}>{name}</Text>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    headText: {
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white'
    },
    cityTouch: {
        backgroundColor: '#e3e3e3',
        width: '100%',
        padding: 15,

    },
    cityText: {
        fontSize: 19
    },
    cityView: {
        borderBottomColor: '#c2c2c2',
        borderBottomWidth: 1,
    }
})

export default City