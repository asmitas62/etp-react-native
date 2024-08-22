import React, { useState } from 'react';
import {
	KeyboardAvoidingView,
	StyleSheet,
	View,
} from 'react-native';
import * as globalCss from "../global.css";
import { useAuth } from '../context/AuthContext';
import Logo from '~/components/Logo';
import UIConstant from './constant/UIConstant';
import { router } from 'expo-router';
import { Button, Input, Layout, Text } from '@ui-kitten/components';

const Page = () => {
	const styleCss = globalCss.styles;
	const [isDisabled, setDisabled] = useState(true);
	const [key, setKey] = useState();
	const [value, setValue] = useState();

	const [username, setUsername] = useState('admin');
	const [password, setPassword] = useState('admin');
	const [domainUrl, setDomainUrl] = useState('Https://domain.url.com/');
	const { onDomainUpdate } = useAuth();
	const proList: { key: string, value: string }[] = UIConstant.UrlPreFixList;
	const logo = require('./../assets/eagle.png');

	const onSignInPress = async () => {
		console.log("dfdfdf",username);
		onDomainUpdate!(username, password, '',domainUrl);
	};

	const OnPressSetUrl = async () => {
		setDomainUrl(domainUrl);
		router.navigate("../loginTypePage");
	}
	const updateState = async () => {
		setDomainUrl(domainUrl);
		setDisabled(false);
	}
	const renderCaption = (): React.ReactElement => {
		return (
			<View style={styles.captionContainer}>
				<Text style={styleCss.captionText}>
					Should contain https or http as pre-fix in url
				</Text>
			</View>
		);
	};

	return (
		<Layout style={styleCss.container}>
			<View style={styleCss.containerContent} >
				<Logo />
			</View>
			<View style={styleCss.innerContainer}>
				<Input style={styles.input}
					label='Domain URL'
					textStyle={{ fontSize: 14 }}
					placeholder='Please Provide API Url'
					caption={renderCaption}
					textContentType='birthdateYear'
					value={value}
					size='large'
					status='primary'
					onChangeText={updateState} />
				{/* disabled={isDisabled}  */}
				<Button status="primary" size="large" onPress={OnPressSetUrl} style={styles.button}>Submit</Button>
			</View>
			<View style={styleCss.footer}>
			</View>
			<View><Text category='c2' status='primary' style={{ marginBottom: "10%", justifyContent: "center", textAlign: "center" }}>copyright@ETP,version 2.0.2</Text></View>
		</Layout>

	);
};

const styles = StyleSheet.create({
	input: {
		marginLeft: 10,
		marginRight: 10
	},
	button: {
		justifyContent: "flex-start",
		alignSelf: "flex-end",
		marginRight: 10,
		top: -6
	},
	captionContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	}

});

export default Page;