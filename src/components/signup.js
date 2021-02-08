import React,{useState} from 'react'
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
import EntIcon from  'react-native-vector-icons/Entypo'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import IIcon from 'react-native-vector-icons/Ionicons'
import { SignUp } from '../store/action/action'
import { connect } from 'react-redux'


const { width, height } = Dimensions.get('window')

function Signup(props) {
    
    const [getEmail,setEmail] = useState('')
    const [getPass,setPass] = useState('')
    const [getName,setName] = useState('')

    const data = {
        name:getName,
        email:getEmail,
        pass:getPass
    }

    return (

        <ScrollView style={{ flex: 1,backgroundColor:'#999999' }}>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, height: 0.4 * height }}>
                    <ImageBackground source={require('../images/back.jpg')} style={{position:'relative', height: '100%', width: '100%',justifyContent:'center',alignItems:'center' }}>
                        <TouchableOpacity  onPress={()=>{props.navigation.goBack()}} activeOpacity={0.4} style={{justifyContent:'center',alignItems:'center',height:50,width:50,position:'absolute',top:10,left:10,backgroundColor:'rgba(13,13,13,0.4)',borderRadius:25}}>
                           <IIcon name='arrow-back-outline' size={30}  />
                        </TouchableOpacity>
                        <Image source={require('../images/blooddrop.png')} style={styles.icon}resizeMode='contain' />
                        <Text style={styles.iconText}>Blood Bank</Text>
                    </ImageBackground>
                </View>
                <View style={{ width: '100%', alignItems: 'center'}}>
                    <View style={{
                        flex: 1, width: '90%', marginTop: -(height*0.05), justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',paddingLeft:30,paddingBottom:30, paddingRight:30,paddingTop:50,borderRadius:10
                    }}>
                        {/* <SelectImage /> */}
                        <FontIcon name='user' size={25} color='#575757' style={{marginLeft:-(0.6*width),marginBottom:-35}} />
                        <TextInput value={getName} onChangeText={(e)=>{setName(e)}} style={styles.email} placeholder="Enter Your Name" />
                        <MCIcon name='email' size={25} color='#575757' style={{marginLeft:-(0.6*width),marginBottom:-35}} />
                        <TextInput value={getEmail} onChangeText={(e)=>{setEmail(e)}} style={styles.email} placeholder="Enter Email" />
                        <EntIcon name='lock' size={25} color='#575757' style={{marginLeft:-(0.6*width),marginBottom:-35}} />
                        <TextInput value={getPass} onChangeText={(e)=>{setPass(e)}} secureTextEntry={true} style={styles.pass} placeholder="Enter Password" />
                        {
                            getName === '' || getPass === '' ||getEmail === ''?
                            <View style={{width:'100%',alignItems:'center'}}>
                        <TouchableOpacity disabled onPress={()=>props.SignUp(data)} style={{width:'90%',justifyContent:'center',alignItems:'center',backgroundColor:'red',marginTop:20,marginBottom:10,padding:5,borderRadius:5}} activeOpacity={0.7}>
                            <Text style={{fontSize:28,fontWeight:'700',color:'white'}}>signup</Text>
                        </TouchableOpacity>
                        <Text style={{color:'red'}}>Fill all fields</Text>
                        </View>
                        :
                        <TouchableOpacity onPress={()=>props.SignUp(data,props)} style={{width:'90%',justifyContent:'center',alignItems:'center',backgroundColor:'red',marginTop:20,marginBottom:10,padding:5,borderRadius:5}} activeOpacity={0.7}>
                            <Text style={{fontSize:28,fontWeight:'700',color:'white'}}>signup</Text>
                        </TouchableOpacity>
                        }
                        
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
    iconText:{
        fontSize:40,
        fontFamily:'PottaOne-Regular',
        color:'#360101',
        letterSpacing:-2,
        fontWeight:'700',
    },
    email: {
        width: '100%',
        fontSize: 16,
        height:45,
        borderWidth: 1,
        borderColor: '#a6a6a6',
        borderRadius: 5,
        marginBottom:20,
        paddingLeft:50
    },
    pass: {
        width: '100%',
        // backgroundColor: '',
        fontSize: 16,
        height:45,
        borderWidth: 1,
        borderColor: '#a6a6a6',
        borderRadius: 5,
        paddingLeft:50

    }


})

const mapDispatchToProps = (dispatch) =>({
    SignUp:(data,props)=>dispatch(SignUp(data,props))
})

export default connect(null,mapDispatchToProps) (Signup)