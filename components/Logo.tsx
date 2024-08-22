import React from 'react';
import {Image, View,  } from 'react-native';
import * as globalCss from '~/global.css';
import { Text } from '@ui-kitten/components';
import { StyleSheet } from "react-native";
export default function Logo() {
    const styleCss = globalCss.styles;
    const logoImage = require('../assets/eagle.png');
    // const img = require ('../assets/etp.logo-etp.jpg')
  return (<>
    <View  style={{flexDirection:'row', alignItems:'center', marginLeft:"-6%"}}>
            <Image id='logo' source={logoImage} style={{width:100,height:100,backgroundColor:"#C5F6F6"}} ></Image>
            <Text category='h1' style={{textAlign:"left",marginLeft:"-7%", paddingBottom:5,fontSize:38}}>Easy Time Pay</Text>
    </View>
    <View style={styles.row}>
    <Text
      style={styles.text}
      category='s1'
    >Web based Attendence and Payroll
    </Text>
  </View>
  </>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginTop: "-10%",
    marginLeft:"26%"
  },
});