import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { default as etptheme } from 'etp.theme.json';
import { default as thememapping } from '../../theme-mapping.json';
import { ThemeContext } from '~/theme.context';
import { useAuth } from '~/context/AuthContext';
import { TabBottom } from '~/components/TabBottom';
import { View,StyleSheet,ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Page from '../(protected)/index';
const { Navigator, Screen } = createBottomTabNavigator();
const UsersScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category='h1'>USERS</Text>
	</Layout>
);

const Users1Screen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} level='2'>
		<Text category='h1'>USERS</Text>
	</Layout>
);

const OrdersScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category='h1'>ORDERS</Text>
	</Layout>
);
const Orders1Screen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category='h1'>ORDERS</Text>
	</Layout>
);
const TabNavigator = () =>{
	return (<Navigator tabBar={(props: any) => <TabBottom {...props} />}>
		<Screen name='home' component={Page}/>
		<Screen name='inbox' component={Users1Screen} />
		<Screen name='Dashboard' component={Users1Screen} />
		<Screen name='inbox1' component={OrdersScreen} />
		<Screen name='inbox2' component={Orders1Screen} />
	</Navigator>
);
}

const DrawerLayout = () => {
	const { authState } = useAuth();
	const [theme, setTheme] = React.useState('light');
	const mapping = thememapping;
	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ApplicationProvider {...eva} customMapping={mapping} theme={{ ...eva.light, ...etptheme }} >
				<Layout level='2' style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}>
				
					<View style={{ flex: 1, justifyContent: "flex-end"}}>
						<TabNavigator />
					</View>
				</Layout>
			</ApplicationProvider>
		</ThemeContext.Provider>
	);
};
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	scrollView: {
	  backgroundColor: 'pink',
	  width:4
	},
	text: {
	  fontSize: 42,
	},
  });
export default DrawerLayout;


