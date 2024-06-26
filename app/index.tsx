import React, { useState } from 'react';
import {
	Text,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	ImageBackground
} from 'react-native';
import { useAuth } from '../context/AuthContext';

const bg = require('../assets/bg2.jpg');
const Page = () => {
	const [username, setUsername] = useState('admin');
	const [password, setPassword] = useState('admin');
	const { onLogin } = useAuth();

	const onSignInPress = async () => {
		console.log("dfdfdf",username);
		onLogin!(username, password);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}> 
			<ImageBackground source={bg} resizeMode="cover" style={styles.image}> 
			<View style={styles.formContainer}>
			<TextInput
				autoCapitalize="none"
				placeholder="admin"
				value={username}
				onChangeText={setUsername}
				style={styles.inputField}/>
			<TextInput
				placeholder="password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.inputField}/>

			<TouchableOpacity onPress={onSignInPress} style={styles.button}>
				<Text style={{ color: '#fff' }}>Sign in</Text>
			</TouchableOpacity>
			</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	formContainer:{
		backgroundColor: "rgb(255, 255, 255) ",
		borderRadius:15,
		paddingHorizontal:10,
		marginHorizontal:10,
		paddingTop:30,
		height:"30%",
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		width: "100%",
		height: "100%"
	},
	circle: {
		width: 100,
		height: 100,
		borderRadius: 100 / 2,
		backgroundColor: "#111233",
	  },
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:"center",
		backgroundColor:"transparent"
	},
	header: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 40
	},
	inputField: {
		marginVertical: 8,
		height: 30,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		padding: 10
	},
	button: {
		marginVertical: 15,
		alignItems: 'center',
		backgroundColor: '#111233',
		padding: 12,
		borderRadius: 4
	}
});
export default Page;