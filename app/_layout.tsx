import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
const bg = require('../assets/bg2.jpg');
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
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(protected)" options={{ headerShown: true }} />
		</Stack>
	);
};

export default function RootLayoutNav() {
	return (
			<AuthProvider>
			<StackLayout />
		</AuthProvider>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		width: "100%",
		height: "100%"
	},
	text: {
		color: 'black',
		fontSize: 42,
		lineHeight: 84,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: '#d3d3d3',
	},
});
