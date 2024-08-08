import { useState } from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import * as globalCss from "../global.css";
import Logo from '~/components/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '~/components/Button';
import { router } from "expo-router";
import { useAuth } from "~/context/AuthContext";

export default function LoginInfoPage(){
    const [employeeCode, setEmployeeCode] = useState('');
    const [companyCode, setCompanyCode] = useState('');
    const [password, setPassword] = useState('');
    // const [username, setUsername] = useState('admin');
    // const { onLogin } = useAuth();
    //const [passwordVisible, setPasswordVisible] = useState(false);
    const [domainUrl, getDomainUrl]= useState('Https://domain.url.com/')

    // const togglePasswordVisibility = () => {
    //     setPasswordVisible(!passwordVisible);
    //   };

    function switchNextPage(){
        router.navigate("../loginPage");
       // onLogin!(username, password,employeeCode);
        getDomainUrl(domainUrl);
        console.log(getDomainUrl);
        
    }
    return(
        <View
		  style={[
			globalCss.GlobalStyle.container,
			{
			  flexDirection: 'column',
			},
		  ]}>
            <View style={{flex: 1, backgroundColor: globalCss.color.white}}>
            <Logo />			
		  </View>
		  <View style={{flex: 1, backgroundColor: globalCss.color.white}} >
          
		  </View>
		  <KeyboardAvoidingView style={{flex: 3, padding:20,backgroundColor: globalCss.color.white}}>
		  <TextInput
				autoCapitalize="none"
				placeholder="Enter Employee Code"
                maxLength={20} 
                value={employeeCode}
                onChangeText={setEmployeeCode}
				style={[globalCss.GlobalStyle.inputField,styles.input]}/>
            <TextInput
             placeholder="Enter Company Code"
             maxLength={20}
             value={companyCode}
             onChangeText={setCompanyCode}
             style={[globalCss.GlobalStyle.inputField, styles.input]}
             />
              {/* <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          maxLength={20}
          value={password}
          onChangeText={setPassword}
          style={[globalCss.GlobalStyle.inputField, styles.input]}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
          <Icon
            name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="gray"
          />
        </TouchableOpacity> */}
             <View style={styles.button}>
             <Button title="Next" onPress={switchNextPage}></Button>	
             </View>
			</KeyboardAvoidingView>
			
		</View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    input:{
       top:40,
       margin:10

    },
    cont:{
        padding:10
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        left:30,
        top:-60
        
    },
    button:{
        top:100,
    },
    iconContainer: {
        position: 'absolute',
        right: 39, 
        top: 224,
      },
    
})