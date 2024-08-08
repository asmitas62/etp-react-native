import React from 'react';
import {Image, View, Text, ImageBackground } from 'react-native';
import { GlobalStyle } from '~/global.css';

export default function Logo() {
    const styleCss = GlobalStyle;
    const logoImage = require('../assets/logo-etp-1.png');
    // const img = require ('../assets/etp.logo-etp.jpg')
  return (
    <>
    <View style={{alignSelf: 'center', paddingTop:20,flex:1,flexDirection: 'row'}}>
            <Image id='logo' style={styleCss.logoImage} source={logoImage}></Image>
            {/* <Text id='logoText' style={styleCss.logoText}>Easy Time Pay</Text> */}
    </View>
    {/* <View style={{alignSelf: 'flex-end' , paddingRight:80,flex:4,flexDirection: 'row'}}>
    <Text id='logoText' style={styleCss.logoTextSm}>Web Based Attandance</Text>
    </View> */}
    </>
    
        
  )
}
