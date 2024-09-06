import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Layout } from '@ui-kitten/components';
import * as globalCss from "../../global.css";
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import Header from '~/components/HeaderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CalendarView } from '~/components/CalenderUI';
const styleCss = globalCss.styles;

const Page = () => {
	const [userName, setUserName] = useState("User");
	const navigation = useNavigation();
	AsyncStorage.getItem('employeeData').then(data=>{
		if(data){
		setUserName(data);
		}
	});
	useEffect(() => {
	  navigation.setOptions({ headerTitle: '',headerBackTitle:'',  headerTransparent: true });
	}, [navigation]);
	const { authState, onLogout } = useAuth();

	const onLogoutPressed = () => {
		onLogout!();
	};
	return (
		<Layout style={styleCss.container}>
			<View style={{flex:1}}><Header name={userName}/></View>
			<View style={styleCss.calenderView}><CalendarView/></View>
			<View style={styleCss.containerDashboard} >
			<View style={styles.separator} />
		</View>
		<Button title="Logout" onPress={onLogoutPressed} />

		</Layout>
	);
};

export default Page;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	separator: {
		height: 1,
		marginVertical: 30,
		width: '80%'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});