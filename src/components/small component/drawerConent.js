import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons'
import IconEnt from 'react-native-vector-icons/Entypo'
import {connect} from 'react-redux'
// import {SignOut} from '../../store/action/action'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

// const setTing = ( props) =>{
//     console.log(props.name)
// }

function DrawerContent({getUserData,SignOut,navigation}) {
    
    // useEffect(() => {
    //     setTing(getUserData)
    // },[]);
    
    // const [getFirst,setFirst] = useState('')
    const { height, width } = Dimensions.get('window')
    return (
        <View style={{ backgroundColor: '#e8e6e6', flex: 1, width: '100%', overflow: 'hidden' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.25 }}>
                <Image source={require('../../images/hand.png')} style={{ width: '40%', height: 120 }} resizeMode='contain' />
                <Text style={{ color: '#300000', fontSize: 35, fontWeight: '700', fontStyle: 'italic', textShadowColor: 'gray', textShadowRadius: 10 }}>Blood Bank</Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#300000' }}>

            </View>
            <View style={{}}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: 150, height: 150, backgroundColor: '#300000', borderRadius: 75, alignItems: 'center' }}>
                        <Text style={{ fontSize: 100, color: 'white', fontFamily: 'serif' }}>{getUserData.first}</Text>
                    </View>
                </View>
                <View style={{ paddingLeft: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconMC name='face' size={40} color="#300000" />
                        <Text style={{ color: '#404040', fontSize: 18, marginLeft: 10 }}>{getUserData.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconMC name='email' size={40} color="#300000" />
                        <Text style={{ color: '#404040', fontSize: 18, marginLeft: 10 }}>{getUserData.email}</Text>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', width: 500, height: 500, backgroundColor: '#300000', borderRadius: 250, bottom: -350, left: -93 }}>

            </View>
            <View style={{width:'100%',alignItems:'center', position: 'absolute', bottom: 10,}}>
                {/* <TouchableOpacity  onPress={()=>{SignOut(navigation)}} activeOpacity={0.8} style={{ padding: 10, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.5)', flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignItems: 'center' }}>
                    <IconEnt name='log-out' size={30} color='white' />
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: '700' }}>Signout</Text>
                </TouchableOpacity> */}

            </View>
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        getUserData : state.userData
    }
}

// const mapDispatchToProps = (dispatch ) =>({
//     SignOut:(navigation)=>dispatch(SignOut(navigation))
// })

export default connect(mapStateToProps,null) (DrawerContent)