import {View, Text, StyleSheet } from 'react-native';

const Page = () =>{
    return <View style={styles.container}>
			<Text style={styles.title}>Adminbnghnghjghj</Text>
    </View>
}
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