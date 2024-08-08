import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as globalCss from "../global.css";
import { Button } from '~/components/Button';
import { useAuth } from '../context/AuthContext';
import UIConstant from './constant/UIConstant';

export default function LoginPageScreen() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [employeeCode,setEmployeeCode] = useState('admin');
  const { onLogin } = useAuth();
  const proList: {key:string,value:string}[] = UIConstant.UrlPreFixList;
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const onSignInPress = async () => {
        console.log(username,password);
        onLogin!(username, password,employeeCode);
    
    
};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={globalCss.color.white}
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
        </TouchableOpacity>
        <Button title='Login' onPress={onSignInPress}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    width: 320,
    position: 'relative',
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingRight: 40, 
  },
  iconContainer: {
    position: 'absolute',
    right: 10, 
    top: 10,
  },
});
