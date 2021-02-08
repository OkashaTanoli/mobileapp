import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity ,BackHandler} from 'react-native'
import RadiaLGradient from 'react-native-radial-gradient'
import IconI from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { useState } from 'react/cjs/react.development'
// import { Individual } from '../store/action/action'
// import AsyncStorage from '@react-native-async-storage/async-storage';

function SearchBlood({ navigation, getBloodData, getBloodName, getProvinceName, getCityName }) {

    const { width, height } = Dimensions.get('window')

    // useEffect(()=>{
    //     GettingFromAsyncStorageForSearchBlood()
    //  })

useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',()=>{
        navigation.navigate('main')
    })
})




    return (
        <View style={{ flex: 1 }}>
            <RadiaLGradient radius={150} colors={['#b50202', '#750000']}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
                    <TouchableOpacity>
                        <IconI onPress={() => { navigation.navigate('main') }} name='arrow-back-sharp' size={40} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>Blood Bank</Text>
                    <Image source={require('../images/dicon.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                </View>
            </RadiaLGradient>
            <ScrollView>
                <View>
                    {
                        getBloodData.map((data, key) => {
                            const dataTwo = data[1]
                            if (dataTwo.bloodType === getBloodName && dataTwo.city === getCityName && dataTwo.province === getProvinceName) {
                                return (
                                    <View key={key} onPress={() => { Individual(dataTwo, navigation) }} style={{
                                        borderBottomColor: '#4a0000',
                                        borderBottomWidth: 10,
                                        paddingBottom: 20
                                    }} >
                                        <View style={styles.individual}>

                                            <View style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: '#470000', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 50, color: 'white', fontStyle: 'italic', fontWeight: '700', fontFamily: 'serif' }}>{getBloodName}</Text>
                                            </View>
                                            <View style={{ width: width * 0.6, marginLeft: 20 }}>
                                                <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10 }}>{`Name : ${dataTwo.name}`}</Text>
                                                <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10 }}>{`Age : ${dataTwo.age}`}</Text>
                                                <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10 }}>{`Geligion : ${dataTwo.religion}`}</Text>
                                                <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10 }}>{`City : ${dataTwo.city}`}</Text>
                                                <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10 }}>{`Province : ${dataTwo.province}`}</Text>

                                                {/* <Text style={{ fontSize: 19, color: 'gray', textAlign: 'left' }}>{dataTwo.address}</Text> */}
                                            </View>

                                        </View>
                                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}>
                                                <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 0 }}>
                                                    <View style={{ width: '45%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10, borderBottomColor: '#696969', borderBottomWidth: 1 }}>
                                                        <IconI name='call' size={30} color='#690101' />
                                                        <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10, marginLeft: 5 }}>{dataTwo.mobileNum}</Text>
                                                    </View>
                                                    <View style={{ width: 1, backgroundColor: '#696969', marginTop: 10, marginBottom: 10 }}></View>
                                                    <View style={{ width: '45%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10, borderBottomColor: '#696969', borderBottomWidth: 1 }}>
                                                        <IconI name='logo-whatsapp' size={30} color='#690101' />
                                                        <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10, marginLeft: 5 }}>{dataTwo.whatsappNum}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 5, paddingBottom: 10, paddingLeft: 18, marginRight: 20 }}>
                                                    <IconI name='mail' size={30} color='#690101' />
                                                    <Text style={{ fontSize: 20, color: 'gray', marginBottom: 10, marginLeft: 15 }}>{dataTwo.email}</Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View style={{padding:10}}>
                                            <Text style={{fontSize:20,color:'black'}}>Address :</Text>
                                            <Text style={{fontSize: 20, color: 'gray', marginBottom: 10, marginLeft: 5 }}>{dataTwo.address}</Text>

                                        </View>

                                    </View>
                                )
                            }
                            else {
                                // return (
                                  false
                                // )
                            }

                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',

    },
    individual: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20
    }
})


const mapStateToProps = (state) => {
    return {
        getBloodData: state.bloodData,
        getBloodName: state.Blood,
        getProvinceName: state.Province,
        getCityName: state.City
    }
}




export default connect(mapStateToProps, null)(SearchBlood)