import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    ImageBackground,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,

} from 'react-native'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntIcon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'
import { SignIn, SignOut ,EmptyError} from '../store/action/action'
// import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')


function Home({ navigation, Loginerror, SignIn ,EmptyError,FillError}) {

    const [getEmail, setEmail] = useState('')
    const [getPass, setPass] = useState('')



    const Login = async (data, navigation, SignIn) => {
        await SignIn(data, navigation)
        setTimeout(() => {
            setEmail('')
            setPass('')
        }, 1000)
    }

    const data = {
        email: getEmail,
        pass: getPass
    }

    return (

        <ScrollView style={{ flex: 1, backgroundColor: '#999999' }}>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, height: 0.4 * height }}>
                    <ImageBackground source={require('../images/back.jpg')} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../images/blooddrop.png')} style={styles.icon} resizeMode='contain' />
                        <Text style={styles.iconText}>Blood Bank</Text>
                    </ImageBackground>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{
                        flex: 1, width: '90%', marginTop: -40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 30, borderRadius: 10
                    }}>
                        <MCIcon name='email' size={25} color='#575757' style={{ marginLeft: -(0.6 * width), marginBottom: -35 }} />
                        <TextInput onFocus={()=>{EmptyError()}} value={getEmail} onChangeText={(e) => { setEmail(e) }} style={styles.email} placeholder="Enter Email" />
                        <EntIcon name='lock' size={25} color='#575757' style={{ marginLeft: -(0.6 * width), marginBottom: -35 }} />
                        <TextInput onFocus={()=>{EmptyError()}} value={getPass} onChangeText={(e) => { setPass(e) }} secureTextEntry={true} style={styles.pass} placeholder="Enter Password" />
                        <Text style={{ color: 'red', marginTop: 10 }}>{Loginerror}</Text>
                        {
                            getEmail === '' || getPass === '' ?
                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    <Text style={{ color: 'red' }}>{FillError}</Text>
                                    <TouchableOpacity disabled onPress={() => { SignIn(data, navigation) }} style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginTop: 20, marginBottom: 10, padding: 5, borderRadius: 5 }} activeOpacity={0.7}>
                                        <Text style={{ fontSize: 28, fontWeight: '700', color: 'white' }}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity onPress={() => { Login(data, navigation, SignIn) }} style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginTop: 20, marginBottom: 10, padding: 5, borderRadius: 5 }} activeOpacity={0.7}>
                                    <Text style={{ fontSize: 28, fontWeight: '700', color: 'white' }}>Login</Text>
                                </TouchableOpacity>
                        }
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ width: '40%', height: 2, backgroundColor: 'gray' }}></View>
                            <View style={{ width: '20%' }}>
                                <Text style={{ textAlign: 'center', marginTop: -14, fontSize: 18 }}>OR</Text>
                            </View>
                            <View style={{ width: '40%', height: 2, backgroundColor: 'gray' }}></View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('signup') }} style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginTop: 20, padding: 5, borderRadius: 5 }} activeOpacity={0.7}>
                            <Text style={{ fontSize: 28, fontWeight: '700', color: 'white' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    icon: {
        width: '30%',
        height: 100,

    },
    iconText: {
        fontSize: 40,
        fontFamily: 'PottaOne-Regular',
        color: '#360101',
        letterSpacing: -2,
        fontWeight:'700',
    },
    email: {
        width: '100%',
        fontSize: 16,
        height: 45,
        borderWidth: 1,
        borderColor: '#a6a6a6',
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 50
    },
    pass: {
        width: '100%',
        // backgroundColor: '',
        fontSize: 16,
        height: 45,
        borderWidth: 1,
        borderColor: '#a6a6a6',
        borderRadius: 5,
        paddingLeft: 50

    }


})

const mapStateToProps = (state) => {
    return {
        Loginerror: state.LoginError,
        FillError:state.fillError
    }
}

const mapDispatchToProps = (dispatch) => ({
    SignIn: (data, nav) => dispatch(SignIn(data, nav)),
    EmptyError: () => dispatch(EmptyError())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)