import React, { ComponentProps, ReactElement, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import * as globalCss from "../global.css";
import { useAuth } from '../context/AuthContext';
import UIConstant from './constant/UIConstant';
import { Button,  IconElement,  Input, Layout, Text,IconProps } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLocalSearchParams } from 'expo-router';

const LoginPageScreen=()=> {
  const { userData }:any = useLocalSearchParams();
  const styleCss = globalCss.styles;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [companyCode,setCompanyCode] = useState('');
  const [domainUrl, setDomainUrl]  = useState('');
  if(userData){
  console.log("appdata fromQR ",userData );
    // setUsername(userData.loginId);
    // setCompanyCode(userData.clientDomain);
    // setDomainUrl(userData.apiUrl);
  }
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const onSignInPress = async () => {
    console.log("data");
        // console.log(username,password);
        // onLogin!(username, password,domainCode,"");
    
    
};
const renderIcon = (props:ComponentProps<IconProps>): IconElement  => (
  <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
    <Icon
      {...props}
      name={passwordVisible ? 'eye-off' : 'eye'} style={{marginTop:3}}
    />
  </TouchableWithoutFeedback>
);
const goToEmpCodeLogin = async() =>{

};

  return (
    <Layout style={styleCss.container}>
			<View style={styleCss.containerLoginContent} >
      <Text status='primary' category='h1' style={{textAlign:"left",marginTop:40}}>
      Welcome !</Text>
      <Text category='h4' status='primary' style={{ margin: "3%",  textAlign: "left" }}>
      Continue To Sign in <Icon   name='arrow-right' style={{fontSize:20, width:40,height:40}} /></Text>
			</View>
			<KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styleCss.innerLoginContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex:1}}>
      <Input style={styles.input}
					label='Employee Code'
					textStyle={{ fontSize: 14 }}
					placeholder='Please Provide UserName'
					value={username}
					size='large'
					status='basic'
					onChangeText={setUsername} />
          <Input style={styles.input}
					label='Company Code'
					textStyle={{ fontSize: 14 }}
					placeholder='Please Provide Domain'
					value={companyCode}
					size='large'
					status='primary'
					onChangeText={setCompanyCode} />
          <Input  style={styles.input}
          placeholder="Password"
          label='Password'
					textStyle={{ fontSize: 14 }}
          secureTextEntry={!passwordVisible}
          accessoryRight={renderIcon}
          value={password}
          onChangeText={setPassword}
        />
				{/* disabled={isDisabled}  */}
				<Button status="primary" size="large" style={styles.button} onPress={onSignInPress}>Submit</Button>
        </View>
        </TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<View style={styleCss.footer}>
			</View>
			<View><Text category='c2' status='primary' style={{ marginBottom: "10%", justifyContent: "center", textAlign: "center" }}>copyright@ETP,version 2.0.2</Text></View>
		</Layout>
  );
}
export default LoginPageScreen;
const styles = StyleSheet.create({
  controlContainer: {
    borderRadius: 4,
    marginTop: "25%",
    padding: 7,
    width:"100%" ,
    justifyContent:"flex-start"
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
		marginLeft: 10,
		marginRight: 10,
    marginBottom: 15
	},
	button: {
		justifyContent: "flex-start",
		alignSelf: "flex-end",
		marginRight: 10,
		top: 10
	},
	captionContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	}
});
