import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout,Text } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { default as etptheme } from 'etp.theme.json'; 
import { default as thememapping } from '../../theme-mapping.json';
import { ThemeContext } from '~/theme.context';
import { useAuth } from '~/context/AuthContext';
import { TabBottom } from '~/components/TabBottom';
import { View } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';

const StackLayout = () => {
	const { authState } = useAuth();
	const segments = useSegments();
	const router = useRouter();
		
	useEffect(() => {
		console.log('auth', authState);
		const inAuthGroup = segments[0] === '(protected)';
		if (!authState?.authenticated && inAuthGroup) {
			router.replace('/');
		} else if (authState?.authenticated === true) {
			router.replace('/(protected)');
		}
	}, [authState]);

	return (
		<Stack>
			<Stack.Screen  initialParams={navigator} name="index"  options={{ headerShown: false }} />
		</Stack>
	);
};
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
        <ApplicationProvider {...eva} customMapping={mapping} theme={{ ...eva.light, ...etptheme}} >
		<Layout style={{flex:1, flexDirection:"column",justifyContent:"flex-end"}}>
				<View style={{flex:1, justifyContent:"flex-end", backgroundColor:"#FFFFFF"}}>
					<StackLayout></StackLayout>
					<TabBottom></TabBottom></View>
			</Layout>
			</ApplicationProvider>
			</ThemeContext.Provider>
	);
};
export default DrawerLayout;