import { View, Button,Text, StyleSheet, TextInput} from "react-native";
import { router, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Container } from "~/components/Container";
import * as globalCss from "../global.css";
import Logo from '~/components/Logo';
import { useState } from "react";

export default function LoginTypePage(){
    const styleCss = globalCss.GlobalStyle;
    const [domainUrl, getDomainUrl] = useState('Https://domain.url.com/');
       
    function switchPage(){      
      router.navigate("../loginInfo");
      getDomainUrl(domainUrl);
      console.log(domainUrl);
    }
    return (
      <View
		  style={[
			globalCss.GlobalStyle.container,
			{
			  flexDirection: 'column',
			},
		  ]}>
		<View style={{flex: 1, backgroundColor: globalCss.color.white}} >
      <Logo />
		  
		  <View style={style.button}> 
        <Button title="Login By Employee Code" onPress={switchPage} color={globalCss.color.secendory}></Button>
      </View>
      <View style={style.button}>           
        <Button title="Login By QR Scanner" color={globalCss.color.secendory}></Button>
      </View>
    </View>
		</View>
      );
};
const style = StyleSheet.create({
    button:{
      margin:10,
      top:-200,
    },
    // cont:{
    //     backgroundColor:'white'
    // },
    


})