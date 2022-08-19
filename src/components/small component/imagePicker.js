import React from 'react'
import {TouchableOpacity,View,Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'



function SelectImage() {

    
const options = {
    title: 'Select Image',
    customButtons: [
      { 
        name: 'customOptionKey', 
        title: 'Choose file from Custom Option' 
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
    const openPicker =  () => {
          ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);
      
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
              alert(res.customButton);
            } else {
              let source = res;
            }
          });
    }
   return(
       <TouchableOpacity onPress={openPicker} activeOpacity={0.5} style={{width:100,height:100,borderRadius:50,backgroundColor:'rgba(110,110,110,0.3)',marginBottom:30}}>
            <Image source={require('../../images/camera.png')} style={{width:'100%',height:'100%',}} resizeMode='cover' />
        </TouchableOpacity>
   ) 
}

export default SelectImage