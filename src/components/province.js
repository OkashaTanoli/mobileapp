import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import RadiaLGradient from 'react-native-radial-gradient'
import IconI from 'react-native-vector-icons/Ionicons'
import {connect} from  'react-redux'
import {SelectProvince} from '../store/action/action'


const MixtureProvince =(props,province)=>{
    props.navigation.navigate('selectcity')
    props.SelectProvince(province)
}

function Province(props) {
    return (
        <View style={{ flex: 1 }}>
            <RadiaLGradient radius={150} colors={['#b50202', '#750000']}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
                    <TouchableOpacity>
                        <IconI onPress={() => { props.navigation.goBack() }} name='arrow-back-sharp' size={40} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>Select Province</Text>
                    <Image source={require('../images/dicon.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                </View>
            </RadiaLGradient>
            <ScrollView>
                <View style={{}}>

                    <View style={styles.cityView}>
                        <TouchableOpacity onPress={()=>{MixtureProvince(props,'sindh')}} style={styles.cityTouch} activeOpacity={0.6}>
                            <Text style={styles.cityText}>Sindh</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cityView}>
                        <TouchableOpacity onPress={()=>{MixtureProvince(props,'punjab')}} style={styles.cityTouch} activeOpacity={0.6}>
                            <Text style={styles.cityText}>Punjab</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cityView}>
                        <TouchableOpacity onPress={()=>{MixtureProvince(props,'kpk')}} style={styles.cityTouch} activeOpacity={0.6}>
                            <Text style={styles.cityText}>Khyber Pakhtunkhwa</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cityView}>
                        <TouchableOpacity onPress={()=>{MixtureProvince(props,'balochistan')}} style={styles.cityTouch} activeOpacity={0.6}>
                            <Text style={styles.cityText}>Balochistan</Text>
                        </TouchableOpacity>
                    </View>


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
        color: 'white'
    },
    cityTouch: {
        backgroundColor: '#e3e3e3',
        width: '100%',
        padding: 20,

    },
    cityText: {
        fontSize: 25,
        fontWeight:'700'
    },
    cityView: {
        borderBottomColor: '#c2c2c2',
        borderBottomWidth: 1,
        // marginBottom:
    }
})

const mapDispatchToProps = (dispatch) => ({
    SelectProvince : (province)=> dispatch(SelectProvince(province))
})

export default connect(null,mapDispatchToProps) (Province)