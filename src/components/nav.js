import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './login'
import SignUp from './signup'
import Main from "./main";
import Contact from './contact'
import SelectProvince from './province'
import SelectCity from './selectcity'
import Helpline from './helpline'
import DonateNow from './donatenow'
import SearchBlood from './searchBlood'
import AboutUs from './aboutus'

import DrawerContent from './small component/drawerConent'




const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()


function DrawerNav() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerStyle={{ width: '85%' }} initialRouteName={Main}>
            <Drawer.Screen name="main" component={Main} />
            <Drawer.Screen name="aboutus" component={AboutUs} />
        </Drawer.Navigator>
    )
}


function Navig() {
    return (

        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen options={{
                    headerShown: false,
                }} name='Login' component={Home} />


                <Stack.Screen options={{
                    headerShown: false
                }} name='main' component={DrawerNav} />


                <Stack.Screen options={{
                    headerShown: false
                }} name='donate' component={DonateNow} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='selectcity' component={SelectCity} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='searchblood' component={SearchBlood} />




                <Stack.Screen options={{
                    headerShown: false
                }} name='selectprovince' component={SelectProvince} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='contact' component={Contact} />


                <Stack.Screen options={{
                    headerShown: false,
                }} name='signup' component={SignUp} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='helpline' component={Helpline} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navig
