import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
import RadiaLGradient from 'react-native-radial-gradient'
import IconI from 'react-native-vector-icons/Ionicons'

function Helpline(props){
    return(
        <View style={{flex:1}}>
            <RadiaLGradient radius={150} colors={['#b50202','#750000']}>
            <View  style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:10}}>
                <TouchableOpacity>
                    <IconI onPress={()=>{props.navigation.goBack()}} name='arrow-back-sharp' size={40} style={{color:'white'}}  />
                </TouchableOpacity>
                <Text style={styles.headText}>National Helpline</Text>
                <Image source={require('../images/helplogo2.png')} style={{width:50,height:50}} resizeMode='contain' />

            </View>
            </RadiaLGradient>


            <ScrollView style={{paddingTop:15,paddingLeft:10,paddingRight:20,backgroundColor:'#d9d9d9',paddingBottom:15}}>
                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Edhi Ambulance Helpline</Text>
                        <Text style={styles.helplineText}>115</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>
                
                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Chhipa Ambulance Helpline</Text>
                        <Text style={styles.helplineText}>1020</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>

                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Rescue 1122 Helpline</Text>
                        <Text style={styles.helplineText}>1122</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>

                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Police Madadgar Helpline</Text>
                        <Text style={styles.helplineText}>15</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>

                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Pakistan Medical Assistance</Text>
                        <Text style={styles.helplineText}>1166</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>

                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Aman Foundation Helpline</Text>
                        <Text style={styles.helplineText}>1021</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>

                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Fire Brigade Helpline</Text>
                        <Text style={styles.helplineText}>16</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>

                <View  style={styles.helpView}>
                    <View>
                        <Text style={styles.helplineText}>Red Crescent</Text>
                        <Text style={styles.helplineText}>35836281</Text>
                    </View>
                    <View>
                        <Image source={require('../images/helpline.png')} style={{width:65,height:65}} resizeMode='contain'  />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    helpView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:25
    },
    headText:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'white'
    },
    helplineText:{
        color:'#3b3b3b',
        fontSize:18,
        fontWeight:'bold',
        fontStyle:'italic'
    }
})

export default Helpline