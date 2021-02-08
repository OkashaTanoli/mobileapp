import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import RadiaLGradient from 'react-native-radial-gradient'
import IconI from 'react-native-vector-icons/Ionicons'
import City from './small component/city'
import {connect} from 'react-redux'
import {SelectCityName} from '../store/action/action'


function SelectCity({navigation,Province,SelectCityName}) {
    return (
        <View style={{ flex: 1 }}>
            <RadiaLGradient radius={150} colors={['#b50202', '#750000']}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
                    <TouchableOpacity>
                        <IconI onPress={() => { navigation.goBack() }} name='arrow-back-sharp' size={40} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>Select City</Text>
                    <Image source={require('../images/dicon.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                </View>
            </RadiaLGradient>
            <ScrollView>

                {/* Sindh
                Sindh
                Sindh
                Sindh */}

                {
                    Province === 'sindh' ? 
                <View style={{}}>

                    <City navig={navigation} selectCity={SelectCityName} name='Karachi' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Hyderabad' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Sukkur' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Larkana' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Nawabshah' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Kotri' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Mirpur Khas' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Shikarpur' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Shikarpur' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Khairpur' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Dadu' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Tando Allahyar' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Tando Adam' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Umerkot' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Badin' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Ghotki' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Mirpur Mathelo' />

                </View>


                :



                Province === 'punjab' ? 

                <View style={{}}>

                    
                <City navig={navigation}   selectCity={SelectCityName} name='Lahore' />
                <City navig={navigation}   selectCity={SelectCityName} name='Faisalabad' />
                <City navig={navigation}   selectCity={SelectCityName} name='Rawalpindi' />
                <City navig={navigation}   selectCity={SelectCityName} name='Gujranwala' />
                <City navig={navigation}   selectCity={SelectCityName} name='Multan' />
                <City navig={navigation}   selectCity={SelectCityName} name='Bahawalpur' />
                <City navig={navigation}   selectCity={SelectCityName} name='Sargodha' />
                <City navig={navigation}   selectCity={SelectCityName} name='Sialkot' />
                <City navig={navigation}   selectCity={SelectCityName} name='Sheikhupura' />
                <City navig={navigation}   selectCity={SelectCityName} name='Rahim Yar Khan' />
                <City navig={navigation}   selectCity={SelectCityName} name='Jhang' />
                <City navig={navigation}   selectCity={SelectCityName} name='Dera Ghazi Khan' />
                <City navig={navigation}   selectCity={SelectCityName} name='Gujrat' />
                <City navig={navigation}   selectCity={SelectCityName} name='Sahiwal' />
                <City navig={navigation}   selectCity={SelectCityName} name='Wah Cantonment' />
                <City navig={navigation}   selectCity={SelectCityName} name='Kasur' />
                <City navig={navigation}   selectCity={SelectCityName} name='Okara' />
                <City navig={navigation}   selectCity={SelectCityName} name='Chiniot' />
                <City navig={navigation}   selectCity={SelectCityName} name='Hafizabad' />
                <City navig={navigation}   selectCity={SelectCityName} name='Sadiqabad' />
                <City navig={navigation}   selectCity={SelectCityName} name='Burewala' />
                <City navig={navigation}   selectCity={SelectCityName} name='Khanewal' />
                <City navig={navigation}   selectCity={SelectCityName} name='Muzaffargarh' />
                <City navig={navigation}   selectCity={SelectCityName} name='Mandi Bahauddin' />
                <City navig={navigation}   selectCity={SelectCityName} name='Jhelum' />
                <City navig={navigation}   selectCity={SelectCityName} name='Khanpur' />
                <City navig={navigation}   selectCity={SelectCityName} name='Pakpattan' />
                <City navig={navigation}   selectCity={SelectCityName} name='Attock' />
                <City navig={navigation}   selectCity={SelectCityName} name='Layyah' />

            </View>



                :



                Province === 'kpk'?


                <View style={{}}>

                    <City navig={navigation}  selectCity={SelectCityName} name='Peshawar' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Mardan' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Mingora' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Kohat' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Dera Ismail Khan' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Abbotabad' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Mansehra' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Swabi' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Nowshera' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Kabal' />
                    <City navig={navigation}  selectCity={SelectCityName} name='Charsadda' />

                </View>

                
                 :   



                Province === 'balochistan'?


                <View style={{}}>

                <City navig={navigation}  selectCity={SelectCityName} name='Quetta' />
                <City navig={navigation}  selectCity={SelectCityName} name='Turbat' />
                <City navig={navigation}  selectCity={SelectCityName} name='Khuzdar' />
                <City navig={navigation}  selectCity={SelectCityName} name='Hub' />
                <City navig={navigation}  selectCity={SelectCityName} name='Chaman' />

                </View>
                   

                :


                alert('Error')
            

}

         
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

})



const mapStateToProps = (state)=>{
    return{
        Province:state.Province,
        // BloodGrp:state.Blood
    }
}

const mapDispatchToProps = (dispatch) => ({
    SelectCityName : (city,navig) => dispatch(SelectCityName(city,navig)),
  })

export default connect(mapStateToProps,mapDispatchToProps) (SelectCity)