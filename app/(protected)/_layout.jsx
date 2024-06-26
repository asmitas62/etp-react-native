import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Role, useAuth } from '../../context/AuthContext';
import iconSet from '@expo/vector-icons/build/Fontisto';

const DrawerLayout = () => {
	const { authState } = useAuth();
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						headerTitle: 'Home',
						drawerLabel: 'Home',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="home-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.authenticated === null}
				/>

				<Drawer.Screen
					name="news"
					options={{
						headerTitle: 'Newsfeed',
						drawerLabel: 'News',
						drawerIcon:({ size, color})=>(
							<Ionicons name="home-outline" size={size} color={color} />
						)
						
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="admin"
					options={{
						headerTitle: 'Admin Area',
						drawerLabel: 'Admin',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.ADMIN}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
};

export default DrawerLayout;