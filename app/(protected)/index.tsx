import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth, Role } from '../../context/AuthContext';
import WithRole from '../../components/WithRole';
import { Layout } from '@ui-kitten/components';
import * as globalCss from "../../global.css";
const styleCss = globalCss.styles;

const Page = () => {
	const { authState, onLogout } = useAuth();

	const onLogoutPressed = () => {
		onLogout!();
	};
	return (
		<Layout style={styleCss.container}>
			<View style={styleCss.containerDashboard} >
			<Text style={styles.title}>Home</Text>
			<Text style={styles.title}>Role: {authState?.role}</Text>
			<Button title="Logout" onPress={onLogoutPressed} />
			<View style={styles.separator} />

			<WithRole role={Role.ADMIN}>
				<Text>Only visible for admins</Text>
			</WithRole>
		</View>
		</Layout>
	);
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
	}
});