import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import RadiaLGradient from 'react-native-radial-gradient'
import IconI from 'react-native-vector-icons/Ionicons'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { SendingDonation } from '../store/action/action'




function DonateNow({ navigation, gettingName, SendingDonation }) {

    const { height, width } = Dimensions.get('window')
    const [getCurrentProvince, setCurrentProvince] = useState(null)
    const [getCity, setCity] = useState(null)

    const [getName, setName] = useState(gettingName.name)
    const [getEmail, setEmail] = useState(gettingName.email)
    const [getAge, setAge] = useState(null)
    const [getMobileNumber, setMobileNumber] = useState(null)
    const [getWhatsappNumber, setWhatsappNumber] = useState(null)
    const [getReligion, setReligion] = useState(null)
    const [getAddress, setAddress] = useState(null)
    const [getKey, setKey] = useState(gettingName.key)


    const [getGender, setGender] = useState(null)
    const [getBlood, setBlood] = useState(null)



    const currentProvince = (label) => {
        console.log(label)
        setCurrentProvince(label)
        setCity(null)
    }

    const completeData = {
        name: getName,
        age: getAge,
        gender: getGender,
        religion: getReligion,
        bloodType: getBlood,
        province: getCurrentProvince,
        city: getCity,
        mobileNum: getMobileNumber,
        whatsappNum: getWhatsappNumber,
        email: getEmail,
        address: getAddress,
        key: getKey
    }

    return (
        <View style={{ flex: 1 }}>
            <RadiaLGradient radius={150} colors={['#b50202', '#750000']}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
                    <TouchableOpacity>
                        <IconI onPress={() => { navigation.goBack() }} name='arrow-back-sharp' size={40} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>Donate Now</Text>
                    <Image source={require('../images/dicon.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                </View>
            </RadiaLGradient>

            <ScrollView style={{ padding: 10 }}>
                <Text style={styles.nameText}>Name</Text>
                <TextInput value={getName} onChangeText={(e) => setName(e)} style={styles.nameInput} placeholder="Enter Name" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <View style={{ width: '47%' }}>
                        <Text style={styles.nameText}>Age</Text>
                        <TextInput value={getAge} onChangeText={(e) => { setAge(e) }} keyboardType='numeric' style={styles.nameInput} placeholder="Enter Age" />
                    </View>
                    <View style={{ width: '47%' }}>
                        <Text style={styles.nameText}>Gender</Text>
                        <DropDownPicker
                            items={[
                                { label: 'Male', value: 'male' },
                                { label: 'Female', value: 'female' },
                            ]}

                            placeholder='select gender'
                            placeholderStyle={{ fontSize: 17 }}
                            defaultValue={getGender}
                            labelStyle={{ color: 'black', fontSize: 16 }}
                            containerStyle={{ height: 45 }}
                            style={{ backgroundColor: 'white' }}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            onChangeItem={item => { setGender(item.value) }}
                            dropDownStyle={{ backgroundColor: 'white' }}
                        />
                    </View>
                </View>
                <Text style={styles.nameText}>Religion</Text>
                <TextInput value={getReligion} onChangeText={(e) => { setReligion(e) }} style={styles.nameInput} placeholder="Enter Religion" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <View style={{ width: '47%' }}>
                        <Text style={styles.nameText}>Blood Type</Text>
                        <DropDownPicker
                            items={[
                                { label: 'O+', value: 'O+' },
                                { label: 'O-', value: 'O-' },
                                { label: 'A+', value: 'A+' },
                                { label: 'A-', value: 'A-' },
                                { label: 'B+', value: 'B+' },
                                { label: 'B-', value: 'B-' },
                                { label: 'AB+', value: 'AB+' },
                                { label: 'AB-', value: 'AB-' },
                            ]}
                            placeholder='Blood Type'
                            placeholderStyle={{ fontSize: 17 }}
                            defaultValue={getBlood}
                            labelStyle={{ color: 'black', fontSize: 16 }}
                            containerStyle={{ height: 45 }}
                            style={{ backgroundColor: 'white' }}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            onChangeItem={(item) => { setBlood(item.value) }}
                            dropDownStyle={{ backgroundColor: 'white' }}
                        />
                    </View>

                    <View style={{ width: '47%' }}>
                        <Text style={styles.nameText}>Select Province</Text>
                        <DropDownPicker
                            items={[
                                { label: 'Sindh', value: 'sindh', },
                                { label: 'Punjab', value: 'punjab' },
                                { label: 'KPK', value: 'kpk' },
                                { label: 'Balochistan', value: 'balochistan' },

                            ]}
                            onChangeItem={(item) => currentProvince(item.value)}
                            placeholder='Select Province'
                            placeholderStyle={{ fontSize: 17 }}
                            defaultValue={getCurrentProvince}
                            labelStyle={{ color: 'black', fontSize: 16 }}
                            containerStyle={{ height: 45 }}
                            style={{ backgroundColor: 'white' }}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            dropDownStyle={{ backgroundColor: 'white' }}
                        />
                    </View>
                </View>
                {
                    getCurrentProvince === 'sindh' ?

                        // SINDH
                        // SINDH
                        // SINDH
                        // SINDH
                        // SINDH

                        <View>
                            <Text style={styles.nameText}>Select City</Text>
                            <DropDownPicker

                                items={[
                                    { label: 'Karachi', value: 'Karachi', },
                                    { label: 'Hyderabad', value: 'Hyderabad' },
                                    { label: 'Sukkur', value: 'sukkur' },
                                    { label: 'Larkana', value: 'Larkana' },
                                    { label: 'Nawabshah', value: 'Nawabshah' },
                                    { label: 'Kotri', value: 'Kotri' },
                                    { label: 'Mirpur Khas', value: 'Mirpur Khas' },
                                    { label: 'Shikarpur', value: 'Shikarpur' },
                                    { label: 'Jacobabad', value: 'Jacobabad' },
                                    { label: 'Khairpur', value: 'Khairpur' },
                                    { label: 'Dadu', value: 'Dadu' },
                                    { label: 'Tando Allahyar', value: 'Tando Allahyar' },
                                    { label: 'Tando Adam', value: 'Tando Adam' },
                                    { label: 'Umerkot', value: 'Umerkot' },
                                    { label: 'Badin', value: 'Badin' },
                                    { label: 'Ghotki', value: 'Ghotki ' },
                                    { label: 'Mirpur Mathelo', value: 'Mirpur Mathelo' },
                                ]}

                                placeholder='Select city'
                                placeholderStyle={{ fontSize: 17 }}
                                defaultValue={getCity}
                                onChangeItem={(item) => { setCity(item.value) }}
                                labelStyle={{ color: 'black', fontSize: 16 }}
                                containerStyle={{ height: 45 }}
                                style={{ backgroundColor: 'white' }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{ backgroundColor: 'white' }}
                            />
                        </View>


                        :


                        getCurrentProvince === 'punjab' ?

                            // PUNJAB
                            // PUNJAB
                            // PUNJAB
                            // PUNJAB
                            // PUNJAB

                            <View>
                                <Text style={styles.nameText}>Select City</Text>
                                <DropDownPicker

                                    items={[
                                        { label: 'Lahore', value: 'Lahore', },
                                        { label: 'Faisalabad', value: 'Faisalabad' },
                                        { label: 'Rawalpindi', value: 'Rawalpindi' },
                                        { label: 'Gujranwala', value: 'Gujranwala' },
                                        { label: 'Multan', value: 'Multan' },
                                        { label: 'Bahawalpur', value: 'Bahawalpur' },
                                        { label: 'Sargodha', value: 'Sargodha' },
                                        { label: 'Sialkot', value: 'Sialkot' },
                                        { label: 'Sheikhupura', value: 'Sheikhupura' },
                                        { label: 'Rahim Yar Khan', value: 'Rahim Yar Khan' },
                                        { label: 'Jhang', value: 'Jhang' },
                                        { label: 'Dera Ghazi Khan', value: 'Dera Ghazi Khan' },
                                        { label: 'Gujrat', value: 'Gujrat' },
                                        { label: 'Sahiwal', value: 'Sahiwal' },
                                        { label: 'Wah Cantonment', value: 'Wah Cantonment' },
                                        { label: 'Kasur', value: 'Kasur ' },
                                        { label: 'Okara', value: 'Okara' },
                                        { label: 'Chiniot', value: 'Chiniot' },
                                        { label: 'Hafizabad', value: 'Hafizabad' },
                                        { label: 'Sadiqabad', value: 'Sadiqabad' },
                                        { label: 'Burewala', value: 'Burewala' },
                                        { label: 'Khanewal', value: 'Khanewal' },
                                        { label: 'Muzaffargarh', value: 'Muzaffargarh' },
                                        { label: 'Mandi Bahauddin', value: 'Mandi Bahauddin' },
                                        { label: 'Jhelum', value: 'Jhelum' },
                                        { label: 'Khanpur', value: 'Khanpur' },
                                        { label: 'Pakpattan', value: 'Pakpattan' },
                                        { label: 'Attock', value: 'Attock' },
                                        { label: 'Layyah', value: 'Layyah' },
                                    ]}

                                    placeholder='Select city'
                                    placeholderStyle={{ fontSize: 17 }}
                                    defaultValue={getCity}
                                    onChangeItem={(item) => { setCity(item.value) }}
                                    labelStyle={{ color: 'black', fontSize: 16 }}
                                    containerStyle={{ height: 45 }}
                                    style={{ backgroundColor: 'white' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start',
                                    }}
                                    dropDownStyle={{ backgroundColor: 'white' }}
                                />
                            </View>

                            :


                            getCurrentProvince === 'kpk' ?

                                // KPK
                                // KPK
                                // KPK
                                // KPK
                                // KPK

                                <View>
                                    <Text style={styles.nameText}>Select City</Text>
                                    <DropDownPicker

                                        items={[
                                            { label: 'Peshawar', value: 'Peshawar', },
                                            { label: 'Mardan', value: 'Mardan' },
                                            { label: 'Mingora', value: 'Mingora' },
                                            { label: 'Kohat', value: 'Kohat' },
                                            { label: 'Dera Ismail Khan', value: 'Dera Ismail Khan' },
                                            { label: 'Abbotabad', value: 'Abbotabad' },
                                            { label: 'Mansehra', value: 'Mansehra' },
                                            { label: 'Swabi', value: 'Swabi' },
                                            { label: 'Nowshera', value: 'Nowshera' },
                                            { label: 'Kabal', value: 'Kabal' },
                                            { label: 'Charsadda', value: 'Kabal' },

                                        ]}

                                        placeholder='Select city'
                                        placeholderStyle={{ fontSize: 17 }}
                                        defaultValue={getCity}
                                        onChangeItem={(item) => { setCity(item.value) }}
                                        labelStyle={{ color: 'black', fontSize: 16 }}
                                        containerStyle={{ height: 45 }}
                                        style={{ backgroundColor: 'white' }}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                        }}
                                        dropDownStyle={{ backgroundColor: 'white' }}
                                    />
                                </View>


                                :


                                getCurrentProvince === 'balochistan' ?

                                    // BALOCHISTAN
                                    // BALOCHISTAN
                                    // BALOCHISTAN
                                    // BALOCHISTAN
                                    // BALOCHISTAN

                                    <View>
                                        <Text style={styles.nameText}>Select City</Text>
                                        <DropDownPicker

                                            items={[
                                                { label: 'Quetta', value: 'Quetta', },
                                                { label: 'Turbat', value: 'Mardan' },
                                                { label: 'Khuzdar', value: 'Khuzdar' },
                                                { label: 'Hub', value: 'Hub' },
                                                { label: 'Chaman', value: 'Chaman' },

                                            ]}

                                            placeholder='Select city'
                                            defaultValue={getCity}
                                            onChangeItem={(item) => { setCity(item.value) }}
                                            placeholderStyle={{ fontSize: 17 }}
                                            labelStyle={{ color: 'black', fontSize: 16 }}
                                            containerStyle={{ height: 45 }}
                                            style={{ backgroundColor: 'white' }}
                                            itemStyle={{
                                                justifyContent: 'flex-start',
                                            }}
                                            dropDownStyle={{ backgroundColor: 'white' }}
                                        />
                                    </View>


                                    :


                                    false


                }
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.nameText}>Mobile Number</Text>
                    <IconI name='call' size={30} color='#630200' style={{ textAlign: 'center', width: '15%', marginBottom: -40, marginTop: 10, borderRightColor: "gray", borderRightWidth: 1 }} />
                    <TextInput value={getMobileNumber} onChangeText={(e) => { setMobileNumber(e) }} keyboardType='numeric' style={[styles.nameInput, { marginTop: 0, paddingLeft: 80 }]} placeholder="Mobile Number" />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.nameText}>Whatsapp Number</Text>
                    <IconI name='logo-whatsapp' size={30} color='#630200' style={{ textAlign: 'center', width: '15%', marginBottom: -40, marginTop: 10, borderRightColor: "gray", borderRightWidth: 1 }} />
                    <TextInput value={getWhatsappNumber} onChangeText={(e) => { setWhatsappNumber(e) }} keyboardType='numeric' style={[styles.nameInput, { marginTop: 0, paddingLeft: 80 }]} placeholder="Whatsapp Number" />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.nameText}>Enter Email</Text>
                    <IconI name='mail' size={30} color='#630200' style={{ textAlign: 'center', width: '15%', marginBottom: -40, marginTop: 10, borderRightColor: "gray", borderRightWidth: 1 }} />
                    <TextInput value={getEmail} onChangeText={(e) => { setEmail(e) }} style={[styles.nameInput, { marginTop: 0, paddingLeft: 80 }]} placeholder="Enter Email" />
                </View>
                <View style={{ marginBottom: 30 }}>
                    <Text style={styles.nameText}>Enter Address</Text>
                    <TextInput value={getAddress} onChangeText={(e) => { setAddress(e) }} multiline numberOfLines={4} style={[styles.nameInput]} placeholder="Enter Complete Address" />
                </View>


                {
                    getName === '' || getAge === null || getGender === null || getEmail === '' || getMobileNumber === null || getWhatsappNumber === null || getAddress === null || getBlood === null || getCurrentProvince === null || getCity === null ?
                        <TouchableOpacity disabled onPress={() => { gettingName }} style={{ marginBottom: 20 }} activeOpacity={0.8} >
                            <RadiaLGradient radius={200} colors={['#ff0000', '#520000']} style={{ padding: 10, backgroundColor: 'red' }}>
                                <Text style={{ fontSize: 39, fontWeight: 'bold', textAlign: 'center', color: 'wheat' }}>Submit</Text>
                            </RadiaLGradient>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { SendingDonation(completeData, navigation) }} style={{ marginBottom: 20 }} activeOpacity={0.8} >
                            <RadiaLGradient radius={200} colors={['#ff0000', '#520000']} style={{ padding: 10, backgroundColor: 'red' }}>
                                <Text style={{ fontSize: 39, fontWeight: 'bold', textAlign: 'center', color: 'wheat' }}>Submit</Text>
                            </RadiaLGradient>
                        </TouchableOpacity>
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
        color: 'white',

    },
    nameInput: {
        width: '100%',
        fontSize: 18,
        padding: 8,
        borderRadius: 5,
        borderColor: '#a1a1a1',
        borderWidth: 1,
        paddingLeft: 20
    },
    nameText: {
        color: 'gray',
        marginBottom: 3

    }
})

const mapStateToProps = (state) => {
    return {
        gettingName: state.userData,
    }
}



const mapDispatchToProps = (dispatch) => ({
    SendingDonation: (completeData, navigation) => dispatch(SendingDonation(completeData, navigation))
})

export default connect(mapStateToProps, mapDispatchToProps)(DonateNow);