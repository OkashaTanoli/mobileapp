import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity, BackHandler } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIconic from 'react-native-vector-icons/Ionicons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconEnt from 'react-native-vector-icons/Entypo'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import RadiaLGradient from 'react-native-radial-gradient'
import { connect } from 'react-redux'
import { SelectBlood, GettingFromAsyncStorage, GettingFromFirebase ,SignOut,GettingTotalUsers} from '../store/action/action'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get("window")
const heightt = width * 100 / 60
const arr = [
  {
    src: 'https://cdn.images.express.co.uk/img/dynamic/1/590x/blood-748915.jpg',
    text: 'Donate Blood and Save lives'
  },
  {
    src: 'https://dhqkhanewal.punjab.gov.pk/system/files/blood.jpg',
    text: 'Always think about others'
  },
  {
    src: 'https://wallpapercave.com/wp/wp4323457.jpg',
    text: 'Donation increases your wealth'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzTYeTuQCb7jioUKed8EN_bzqUQLhW7aslw&usqp=CAU',
    text: 'Allah blesses you if you donate blood'
  },

  {
    src: 'https://st1.latestly.com/wp-content/uploads/2020/06/World-Blood-Donor-Day.jpg',
    text: 'This creates happiness in society'
  },






]


const Mixup = (navigation, SelectBlood, BloodGrp) => {
  navigation.navigate('selectprovince')
  SelectBlood(BloodGrp)
}

function Main({ totalUsers, navigation, GettingFromAsyncStorage, SelectBlood, GettingFromFirebase,SignOut,GettingTotalUsers }) {
  const [active, setAcive] = useState(0)
  const [isTrue, setTrue] = useState(false)

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
    GettingFromAsyncStorage()
    GettingFromFirebase()
    GettingTotalUsers()
  });

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slide !== active) {
      setAcive(slide)
    }
  }


  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, position: 'relative' }}>
        <View style={{ position: 'relative', width: '100%', zIndex: -1 }}>
          <ImageBackground source={require("../images/back3.jpg")} style={{ width: '100%', height: 0.4 * height, position: 'relative' }} resizeMode='cover'>
            <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(10,0,0,0.8)' }}></View>
            <View style={styles.head}>
              <IconEntypo onPress={() => { navigation.openDrawer() }} name='menu' style={{
                textShadowColor: '#4a4a4a',
                textShadowRadius: 5
              }} size={40} color='white' />
              <Text style={styles.headText}>Blood Bank</Text>
              <IconMCI onPress={()=>setTrue(!isTrue)} name='dots-vertical' size={40} color='white' />
            </View>
            {
              isTrue?
            <TouchableOpacity onPress={()=>SignOut(navigation)} activeOpacity={0.8} style={{ position: 'absolute', right: 40, top: 60, width: 200, height: 70, padding: 10, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.9)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <IconEnt name='log-out' size={30} color='white' />
              <Text style={{ color: 'white', fontSize: 30, fontWeight: '700' }}>Signout</Text>
            </TouchableOpacity>
            :
            false
            }
            
          </ImageBackground>
        </View>
        <View style={{ position: 'absolute', top: 0.257 * height }}>
          <View style={{ width, height: 0.3 * heightt, alignItems: 'center', zIndex: -1 }}>
            <ScrollView horizontal onScroll={change} showsHorizontalScrollIndicator={false} pagingEnabled style={{

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,

              elevation: 17,
              width: 0.8 * width, height: 0.3 * heightt
            }}>
              {
                arr.map((value, key) => {
                  return (
                    <View key={key} style={{ position: 'relative', width: 0.8 * width, height: 0.3 * heightt, justifyContent: 'center', alignItems: 'center' }}>
                      <Image key={key} source={{ uri: value.src }} style={{ width: 0.8 * width, height: 0.3 * heightt }} resizeMode="cover" />
                      <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                        <Text style={{ width: '55%', fontSize: 25, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{value.text}</Text>
                      </View>
                    </View>
                  )
                })
              }
            </ScrollView>
          </View>
          <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
            {
              arr.map((i, k) => {
                return (
                  <Text key={k} style={k === active ? styles.btnText : styles.btnAciveText}>⬤</Text>
                )
              })
            }
          </View>
        </View>
        <View style={{ backgroundColor: '#ededed', zIndex: -2, marginTop: 0.04 * height, paddingTop: 0.18 * height, paddingBottom: 40 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('donate') }} activeOpacity={0.85} style={{
              justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,

              elevation: 14,
              width: '30%',
              height: 0.16 * height
            }}>
              <IconFont color='#a30000' name='hand-holding-medical' size={50} />
              <Text style={{ letterSpacing: -0.9, fontSize: 18, fontWeight: '700', color: '#5c0000', marginTop: 5 }}>Donate Now</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.85} style={{
              justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,

              elevation: 14,
              width: '30%',
              height: 0.16 * height
            }}>
              <Image source={require('../images/hand.png')} style={{ width: '70%', height: '45%' }} resizeMode='contain' />
              <Text style={{ letterSpacing: -0.9, fontSize: 18, fontWeight: '700', color: '#5c0000', marginTop: 5 }}>My Donations</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('helpline') }} activeOpacity={0.85} style={{
              justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,

              elevation: 14,
              width: '30%',
              height: 0.16 * height
            }}>
              <Image source={require('../images/helpline.png')} style={{ width: '70%', height: '45%' }} resizeMode="contain" />
              <Text style={{ letterSpacing: -0.9, fontSize: 18, fontWeight: '700', color: '#5c0000', marginTop: 5 }}>Help Line</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 15, height: 300, width: '100%', backgroundColor: '#ededed', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 250, height: 250, borderRadius: 125 }}>
            <View style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: 'black', position: 'absolute', top: 95.5, left: 94 }}>
              <IconMCI name='home-plus' size={40} color='white' />
            </View>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'O+') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#20912f', position: 'absolute', top: 0, left: 94 }}>
              <Text style={styles.grpText}>O+</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'AB+') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#773f91', position: 'absolute', bottom: 0, left: 94 }}>
              <Text style={styles.grpText}>AB+</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'B+') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#3e379e', position: 'absolute', top: 95.5, left: 0 }}>
              <Text style={styles.grpText}>B+</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'A+') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#c24700', position: 'absolute', top: 95.5, right: 0 }}>
              <Text style={styles.grpText}>A+</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'O-') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#479e00', position: 'absolute', top: 28, right: 28 }}>
              <Text style={styles.grpText}>O-</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'A-') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#fca800', position: 'absolute', bottom: 28, right: 28 }}>
              <Text style={styles.grpText}>A-</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'B-') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#338ab5', position: 'absolute', top: 28, left: 28 }}>
              <Text style={styles.grpText}>B-</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => { Mixup(navigation, SelectBlood, 'AB-') }} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, backgroundColor: '#aa7ebd', position: 'absolute', bottom: 28, left: 28 }}>
              <Text style={styles.grpText}>AB-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ padding: 30, backgroundColor: '#ededed', marginTop: 15, justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
          <Text style={{ fontSize: 25, fontWeight: '700', fontStyle: 'italic' }}>Total Donars</Text>
          <Text style={{ fontSize: 30, fontWeight: '500', fontStyle: 'italic' }}>{totalUsers}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('contact') }}>
          <RadiaLGradient radius={200} colors={['#ff0000', '#520000']} style={{ padding: 30, backgroundColor: 'red' }}>
            <Text style={{ fontSize: 39, fontWeight: 'bold', textAlign: 'center', color: 'wheat' }}>Contact Us</Text>
          </RadiaLGradient>
        </TouchableOpacity>

      </View>
    </ScrollView>





  )
}

const styles = StyleSheet.create({
  grpText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 18,
    fontWeight: '700'
  },
  btnText: {
    margin: 3,
    color: 'white',
    fontSize: 18,
  },
  btnAciveText: {
    margin: 3,
    color: '#808080',
    fontSize: 18
  },
  head: {
    // backgroundColor:'red',
    height: 0.1 * heightt,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  headText: {
    fontSize: 38,
    fontWeight: '500',
    color: '#7d0000',
    letterSpacing: -2.5,
    fontFamily: 'PottaOne-Regular',
    textShadowColor: '#828181',
    textShadowRadius: 7
  },

})

const mapStateToProps = (state) => {
  return {
    totalUsers: state.totalUsers
  }
}


const mapDispatchToProps = (dispatch) => ({
  SelectBlood: (BloodGrp) => dispatch(SelectBlood(BloodGrp)),
  GettingFromAsyncStorage: () => dispatch(GettingFromAsyncStorage()),
  GettingFromFirebase: () => dispatch(GettingFromFirebase()),
  SignOut:(navigation)=>dispatch(SignOut(navigation)),
  GettingTotalUsers:()=>dispatch(GettingTotalUsers())

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)