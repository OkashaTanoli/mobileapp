import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import IconIon from  'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import { GettingFromAsync} from  '../store/action/action'

function IndividualSearchBlood(props) {

    useEffect(()=>{
        props.GettingFromAsync()
    })

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: 20 }}>

                <View style={{ width: 200, height: 200, borderRadius: 100, overflow: 'hidden' }}>
                    <ImageBackground source={{ uri: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/04/blood-bank-1492998880.jpg' }} style={{ width: '100%', height: '100%', backgroundColor: '#470000', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ zIndex: 1, fontSize: 90, color: 'white', fontStyle: 'italic', fontWeight: '700', fontFamily: 'serif', color: 'red' }}>A+</Text>
                        <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, backgroundColor: 'rgba(0,0,0,0.85)' }}></View>
                    </ImageBackground>
                </View>
                <Text style={{ fontSize: 18, color: 'gray', marginTop: 30, marginBottom: 20, marginLeft: 10, marginRight: 10 }}>Group A – has only the A antigen on red cells (and B antibody in the plasma)</Text>
            </View>

            <View style={{}}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', borderTopWidth: 1, borderTopColor: 'gray', padding: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '700' }}>Personal Details</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginBottom:20}}>
                    <View>
                        <Text style={{ color: '#363636', fontSize: 20, fontWeight: '700', margin: 10 }}>Name : Ali khan</Text>
                        <Text style={{ color: '#363636', fontSize: 20, fontWeight: '700', margin: 10 }}>Age :  10</Text>
                    </View>
                    <View style={{height:'100%',backgroundColor:'gray',width:1,alignSelf:'center'}}>

                    </View>
                    <View>
                        <Text style={{ color: '#363636', fontSize: 20, fontWeight: '700', margin: 10 }}>Gender :  Male</Text>
                        <Text style={{ color: '#363636', fontSize: 20, fontWeight: '700', margin: 10 }}>Religion :  Islam</Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', borderTopWidth: 1, borderTopColor: 'gray', padding: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '700' }}>Contact Details</Text>
                </View>
                <View style={{paddingLeft:20,paddingTop:20}}>
                    <View style={{flexDirection:'row'}}>
                        <IconIon name ='call' size={25} color='#690101' />
                        <Text style={{fontSize:20,marginLeft:20,fontWeight:'700',marginBottom:10}}>03332593224</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <IconIon name ='logo-whatsapp' size={25} color='#690101' />
                        <Text style={{fontSize:20,marginLeft:20,fontWeight:'700',marginBottom:10}}>03332593224</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <IconIon name ='mail' size={25} color='#690101' />
                        <Text style={{fontSize:20,marginLeft:20,fontWeight:'700'}}>okashatanoli12345@gmail.com</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapDispatchToProps = (dispatch) =>{
    GettingFromAsync:()=>dispatch(GettingFromAsync())
}

export default connect(null,mapDispatchToProps) (IndividualSearchBlood)