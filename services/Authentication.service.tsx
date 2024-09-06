import axios, { all } from 'axios';
import { AuthModel } from '~/app/model/AuthModel';
import axiosInstance from './HttpInterceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
const qs = require('qs');
export const authorizeUser = async(authData:any) => {
    const payload: AuthModel = {
        username: authData.username,
        password: authData.password,
        companyDomain: authData.companyCode,
        deviceId: 'asdndhj4-5ttm6767-m566h-565jj56510.0',
        deviceInfo: 'Noikia sirc-Androuv',
        latitude: '45.676767',
        longitude: '45.676767',
        grant_type:'password',
        notificationKeyID:"fsoFXMetQ9qju2j1f9X1ox:APA91bGYEArwacB7YI4Vnro65ycbN4xMn9M6fczm94cmfsk7B5fdKFsYeReytTFZRhc53ujbE9VRwkbjCIRro4j31IVcGx19Z0N49mmhQ70YClifBL5XNNY3ex9XGEhOTR5rhBIzF-or"
    }
    return axios.post('https://testapi.etpcloud.in/easypay/token',qs.stringify(payload),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});
}

export const fetchUserDeatils = async() =>{
    const baseURL = await AsyncStorage.getItem('apiUrl');
    if(baseURL){
        return axiosInstance.get('/api/AppUser/Detail',{baseURL:"https://testapi.etpcloud.in"});
    } else return null;
}