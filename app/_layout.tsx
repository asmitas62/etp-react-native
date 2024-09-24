import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { default as etptheme } from 'etp.theme.json';
import { default as thememapping } from '../theme-mapping.json';
import { ThemeContext } from 'theme.context';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { View } from 'react-native';
import Loader from './components/LoaderScreen';
import { LoaderProvider } from './context/LoaderContext';
import Toast from 'react-native-toast-message';

const StackLayout = () => {
	const { authState } = useAuth();
	const { onPersistLogin } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		onPersistLogin!();
		console.log('auth-1', authState);
		const inAuthGroup = segments[0] === '(protected)';
		console.log('auth-sss', inAuthGroup);
		if (!authState?.authenticated && inAuthGroup) {
			console.log('auth-ss', authState);
			router.navigate("/");
		} else if (authState?.authenticated) {
			console.log('auth-login success', inAuthGroup);
			router.replace('/(protected)');
		}
	}, [authState]);

	return (<>
		<Stack initialRouteName='index'>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(protected)" options={{ headerShown: false }} redirect={authState?.authenticated === null}/>
		</Stack></>
	);
};
export default function RootLayoutNav() {
	const [theme, setTheme] = React.useState('light');
	const mapping = thememapping;
	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
	};
	return <>
		<IconRegistry icons={EvaIconsPack} />
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ApplicationProvider {...eva} customMapping={mapping} theme={{ ...eva.light, ...etptheme }} >
				<Layout style={{ flex: 1, flexDirection: "column" }}>
					<View style={{ justifyContent: 'center', flex: 1 }}>
					<LoaderProvider>
						<AuthProvider>
							<StackLayout />
    						<Toast position='bottom'  />

						</AuthProvider>
						</LoaderProvider>
					</View>

				</Layout>

			</ApplicationProvider>
		</ThemeContext.Provider>
	</>
};
