import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions ,ScrollView} from 'react-native'
import RadiaLGradient from 'react-native-radial-gradient'
import IconI from 'react-native-vector-icons/Ionicons'

// const {width,height} = Dimensions.get('window')
function Contact(props) {
    return (
        <ScrollView>

        <View style={{ flex: 1 }}>
            <RadiaLGradient radius={150} colors={['#b50202', '#750000']}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
                    <TouchableOpacity>
                        <IconI onPress={() => { props.navigation.goBack() }} name='arrow-back-sharp' size={40} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>Contact Us</Text>
                    <Image source={require('../images/contact.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />

                </View>
            </RadiaLGradient>

            <View style={{ padding: 10 }}>
                <TextInput placeholder='Enter Name' style={styles.input} />
                <TextInput keyboardType='email-address' placeholder='Enter Email' style={styles.input} />
                <TextInput keyboardType='numeric' placeholder='Enter Phone Number' style={styles.input} />
                <TextInput keyboardType='default' placeholder='Write your message' style={styles.input} multiline numberOfLines={4} />
                <TouchableOpacity style={{ width: '100%',marginTop:50 }} activeOpacity={0.8} >
                    <RadiaLGradient radius={200} colors={['#b50202', '#750000']} style={{ padding: 10, backgroundColor: 'red' }}>
                        <Text style={{ fontSize: 39, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>send</Text>
                    </RadiaLGradient>
                </TouchableOpacity>
            </View>
        </View>
                    
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white'
    },
    input: {
        padding: 10,
        borderRadius: 6,
        fontSize: 18,
        borderColor: '#c4c4c4',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 12
    }
})

export default Contact