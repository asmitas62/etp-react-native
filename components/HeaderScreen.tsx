import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Icon, Layout, Text, TopNavigation } from '@ui-kitten/components';
import * as globalCss from 'global.css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Header = (): React.ReactElement => {
    const gCss = globalCss.styles;
    const [userName, setUserName] = useState('');
    useEffect(() => {
		AsyncStorage.getItem('employeeData').then(data => {
			if (data) {
			console.log("username",data);
			setUserName(data);
			}});
	},[userName]);
      
  const renderOverflowMenuAction = (): React.ReactElement => (
    <Layout style={styles.layoutRight} level='2'>
    <View><Icon
        fill='#257F97'
        style={styles.icon}
        name='search'
    /></View>
    <Icon
        fill='#257F97'
        style={styles.icon}
        name='bell'
    />
    <Icon
        fill='#257F97'
        style={styles.icon}
        name='settings' />
</Layout>
  );
  const renderHeading = (): React.ReactElement => (
    <Text category='h4' status='primary'>Hi {userName} !</Text>
  );

    return (<><TopNavigation accessoryLeft={renderHeading} style={{marginTop: 20,marginLeft:5,marginRight:10}}  accessoryRight={renderOverflowMenuAction}/>
          </>)
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
        width: 20,
        height: 20,
        marginRight: 7
    }
});