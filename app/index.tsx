import React, { useState } from 'react';
import {
	Text,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	ImageBackground,
	FlatList,
	SafeAreaView
} from 'react-native';
import * as globalCss from "../global.css";
import { useAuth } from '../context/AuthContext';
import Logo from '~/components/Logo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '~/components/Button';
import List from '~/components/List';
import UIConstant from './constant/UIConstant';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaFrameContext, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import RNSecureStorage from 'rn-secure-storage';

const Page = () => {
	const styleCss = globalCss.GlobalStyle;
	const [key, setKey] = useState();
	const [value, setValue] = useState();

	const [username, setUsername] = useState('admin');
	const [password, setPassword] = useState('admin');
	const [domainUrl, setDomainUrl] = useState('Https://domain.url.com/');
	//const { onLogin } = useAuth();
	const proList: {key:string,value:string}[] = UIConstant.UrlPreFixList;

	// const onSignInPress = async () => {
	// 	console.log("dfdfdf",username);
	// 	onLogin!(username, password);
	// };
	
	const OnPressSetUrl = async () =>{
		setDomainUrl(domainUrl);
		router.navigate("../loginTypePage");
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
			
		  </View>
		  <View style={{flex: 2, backgroundColor: globalCss.color.white}} >
		  <Logo />
		  </View>
		  <KeyboardAvoidingView style={{flex: 3, padding:20,backgroundColor: globalCss.color.white}}>
		  <TextInput
				autoCapitalize="none"
				placeholder="Please Provide API URL"
				maxLength={30}
				value={domainUrl}
				onChangeText={setDomainUrl}
				style={globalCss.GlobalStyle.inputField}/>
				{/* <Button onPress={onSignInPress} title='Next'></Button> */}
				<Button onPress={OnPressSetUrl} title='Next'></Button>
			</KeyboardAvoidingView>
			<View style={globalCss.GlobalStyle.footer}>
				<Text>App Version 7.0.2</Text>
			</View>
		</View>

	  );
	};
	
	const styles = StyleSheet.create({
	  container: {
		flex: 1,
	  },
	
	});

export default Page;