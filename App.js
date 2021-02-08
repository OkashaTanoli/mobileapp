import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native'
import Navig from './src/components/nav'
import {Provider} from 'react-redux'
import store from './src/store/index'
// import { Transition } from 'react-native-reanimated';


const App = () =>{
  return (
    <Provider store={store}>
      <Navig />
    </Provider>
  )
  
  }

export default App
