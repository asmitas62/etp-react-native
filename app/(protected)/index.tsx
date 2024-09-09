import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Layout } from '@ui-kitten/components';
import * as globalCss from "../../global.css";
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { CalendarView } from '~/components/CalenderUI';
import LeaveBalanceView from '~/components/LeaveBalance';
import { Header } from '~/components/HeaderScreen';
const styleCss = globalCss.styles;

const Page = () => {
	const navigation = useNavigation();
	useEffect(() => {
		navigation.setOptions({ headerTitle: '', headerBackTitle: '', headerTransparent: true });
	}, [navigation]);
	const { authState, onLogout } = useAuth();

	const onLogoutPressed = () => {
		onLogout!();
	};
	
return (
	<ScrollView scrollEnabled={true} overScrollMode="auto" >
	<Layout style={styleCss.container} level='2'>
		<Layout style={styles.layoutCalender} level='2'><Header/></Layout>
		<Layout style={styles.layoutCalender} level='2'><CalendarView /></Layout>
		<Layout style={styles.layoutCalender} level='2'><LeaveBalanceView /></Layout>
		<Layout style={styles.layoutCalender} level='2'><LeaveBalanceView /></Layout>
		<Layout style={styles.layout} level='2'></Layout>
		<Button title="Logout" onPress={onLogoutPressed} />
	</Layout></ScrollView>
)
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
	},
	layout: {
		flex: 1,
		position:"absolute"
		// alignItems: 'center',
	},
	layoutCalender:{
		position:"static",
	}
});