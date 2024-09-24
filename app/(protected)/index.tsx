import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { Button, Layout } from '@ui-kitten/components';
import * as globalCss from "global.css";
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { CalendarView } from '../components/CalenderUI';
import LeaveBalanceView from '../components/LeaveBalance';
import { Header } from '../components/HeaderScreen';
import VisitorStatusView from '../components/VisitorStatus';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import AppUtil from '../services/util/AppUtil';
import { getAttendanceDetail } from '../store/reducer/attandenceSlice';
import { fetchAttendance, fetchLeaveBalance, fetchVisitorStatus } from '../services/AttendanceService';
import { getLeaveBalanceDetail } from '../store/reducer/leaveDataSlice';
import { getvisitorDetail } from '../store/reducer/visitorDetailSlice';
import { useIsFocused } from '@react-navigation/native';
const styleCss = globalCss.styles;
const Page = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		navigation.setOptions({ headerTitle: '', headerBackTitle: '', headerTransparent: true });
	}, [navigation]);

	const { authState, onLogout } = useAuth();
	AsyncStorage.getItem('employeeID').then(data => {
		if (data) {
			const date = moment().format('DD-MMM-YYYY');
			console.log('date attendance', date,data);
			fetchVisitorStatus(date).then(result=>{
				const visitorDetail = AppUtil._deepCopy(result.data);
				console.log('leaveDetail data', visitorDetail.responseObject.httpCode);
				if(visitorDetail.responseObject.httpCode == 200){
					dispatch(getvisitorDetail(visitorDetail.responseObject.response));
				}
			 })
			 fetchLeaveBalance(data).then(result=>{
				const leaveDetail = AppUtil._deepCopy(result.data);
				console.log('leaveDetail data', leaveDetail.responseObject.httpCode);
				if(leaveDetail.responseObject.httpCode == 200){
					dispatch(getLeaveBalanceDetail(leaveDetail.responseObject.response));
				}
			 })
			 fetchAttendance(data, date).then((response: any) => {
				const attDetail = AppUtil._deepCopy(response.data);
				console.log('Attendance data', attDetail.responseObject.httpCode);
				if(attDetail.responseObject.httpCode == 200){
					dispatch(getAttendanceDetail(attDetail.responseObject.response));
				}
			})
			.catch(error => {
				console.error("Error user data: ", error);
			});

		}
	});


	const onLogoutPressed = () => {
		onLogout!();
	};

	return (
		<><Layout style={styles.layoutCalender} level='2'><Header /></Layout>
		<ScrollView scrollEnabled={true} overScrollMode="auto" >
			<Layout style={styleCss.container} level='2'>
				<Layout style={styles.layoutCalender} level='2'><CalendarView dispatchAction={dispatch} /></Layout>
				<Layout style={styles.layoutCalender} level='2'><LeaveBalanceView  dispatchAction={dispatch}/></Layout>
				<Layout style={styles.layoutCalender} level='2'><VisitorStatusView dispatchAction={dispatch}/></Layout>
			</Layout>
			<Layout style={styles.layoutCalender} level='2'>
				<Button onPress={onLogoutPressed}>Logout</Button>
			</Layout>
			</ScrollView></>
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
		position: "absolute"
		// alignItems: 'center',
	},
	layoutCalender: {
		position: "static",
	},
	circleHalf: {
		width: 50,
		height: 50,
		backgroundColor: "linear-gradient( -45deg, blue, blue 49%, white 49%, white 51%, red 51% )" ,
		borderRadius: 50
	  }
});