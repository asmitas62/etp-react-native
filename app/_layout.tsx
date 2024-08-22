import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import React from 'react';
import { default as etptheme } from 'etp.theme.json'; 
import { default as thememapping } from '../theme-mapping.json';
import { ThemeContext } from '~/theme.context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { EvaIconsPack } from '@ui-kitten/eva-icons';

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
			<Stack.Screen name="QrScanner"  options={{headerTitle: '', headerBackTitle:"Back",headerTransparent: true}} />
			<Stack.Screen name="loginPage"  options={{headerTitle: '', headerBackTitle:"Back",headerTransparent: true}} />
			<Stack.Screen name="(protected)" options={{ headerShown: false}} />
		</Stack>
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
        <ApplicationProvider {...eva} customMapping={mapping} theme={{ ...eva.light, ...etptheme}} >
		<Layout style={{flex:1, flexDirection:"column"}}>
		<KeyboardAwareScrollView contentContainerStyle={{justifyContent: 'center', flex:1}}>
	 			<AuthProvider>
	 				<StackLayout />
	 			</AuthProvider>
		</KeyboardAwareScrollView>
	 			</Layout>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
};
