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
import * as globalCss from "../global.css"
import { useAuth } from '../context/AuthContext';
import Logo from '~/components/Logo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '~/components/Button';
import List from '~/components/List';
import UIConstant from './constant/UIConstant';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaFrameContext, SafeAreaProvider } from 'react-native-safe-area-context';

const Page = () => {
	const styleCss = globalCss.GlobalStyle;
	const [username, setUsername] = useState('admin');
	const [password, setPassword] = useState('admin');
	const [domainUrl, setDomainUrl] = useState('Https://domain.url.com/')
	const { onLogin } = useAuth();
	const proList: {key:string,value:string}[] = UIConstant.UrlPreFixList;

	const onSignInPress = async () => {
		console.log("dfdfdf",username);
		onLogin!(username, password);
	};

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
		  <KeyboardAvoidingView style={{flex: 3, padding:10,backgroundColor: globalCss.color.white}}>
		  <TextInput
				autoCapitalize="none"
				placeholder="admin"
				value={username}
				onChangeText={setUsername}
				style={globalCss.GlobalStyle.inputField}/>
				<Button onPress={onSignInPress} title='Next'></Button>
			</KeyboardAvoidingView>
		</View>
	  );
	};
	
	const styles = StyleSheet.create({
	  container: {
		flex: 1,
	  },
	});

export default Page;