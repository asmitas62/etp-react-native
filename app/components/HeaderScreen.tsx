import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Divider, Icon, IconElement, Layout, Text, TopNavigation } from '@ui-kitten/components';
import * as globalCss from 'global.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';

export const Header = (): React.ReactElement => {
    const gCss = globalCss.styles;
    const { authState, onLogout } = useAuth();

	const onLogoutPressed = () => {
		onLogout!();
	};
    const [userName, setUserName] = useState(authState?.username);
    useEffect(() => {
		AsyncStorage.getItem('employeeData').then(data => {
			if (data) {
			console.log("username",data);
			setUserName(data);
			}});
	},[userName]);
    const StarIcon = (props:any): IconElement => (
        <Icon
          {...props}
          name='star'
        />
      );
      const BellIcon = (props:any): IconElement => (
        <Icon
          {...props}
          name='bell'
        />
      );
      const SearchIcon = (props:any): IconElement => (
        <Icon
          {...props}
          name='search'
        />
      );
  const renderOverflowMenuAction = (): React.ReactElement => (
    <Layout style={styles.layoutRight} level='2'>
      <TouchableOpacity onPress={onLogoutPressed}>
        <Icon
      style={styles.icon}
      fill='#8F9BB3'
      name='pin'
    /></TouchableOpacity> 
        <TouchableOpacity onPress={onLogoutPressed}>
        <Icon
      style={styles.icon}
      fill='#8F9BB3'
      name='settings'
    /></TouchableOpacity> 
        <TouchableOpacity onPress={onLogoutPressed}>
        <Icon
      style={styles.icon}
      fill='#8F9BB3'
      name='grid'
    /></TouchableOpacity> 
</Layout>
  );
  const renderHeading = (): React.ReactElement => (
    <Text category='h4' status='primary'>Hi {userName? userName : 'User'} !</Text>
  );

    return (<><TopNavigation accessoryLeft={renderHeading} style={{marginTop: 20,marginLeft:5,marginRight:10,paddingTop:"10%"}}  accessoryRight={renderOverflowMenuAction}/>
          <Divider/></>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        top: 30,
        margin: 20
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:40


    },
    button:{
      paddingLeft: 2,
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      width: 27,
      height: 23,
      borderRadius: 7,
      backgroundColor:"#1E6955",
      borderColor:"#1E6955"
    },
    layoutRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        height: 40,
        marginRight: "25%",
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop:15

    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 7
    }
});