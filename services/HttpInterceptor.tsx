import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios';
import Toast from 'react-native-toast-message';
import showToast from '~/components/ToastMessage';

const baseURL = 'https://testapi.etpcloud.in/test';

const axiosInstance:AxiosInstance = axios.create({
  baseURL,
  timeout: 10000, // 10 seconds timeout
});
// Request interceptor for adding authorization token
axiosInstance.interceptors.request.use(
  async (config) => {
    console.log("cofig-",config);
    const token = await AsyncStorage.getItem('token');
    const clientDomain = await AsyncStorage.getItem('ClientDomain');
    if (token && clientDomain) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Accept = "application/json";
      config.headers.DeviceInfo= "YTAxczFlLTAxZDUwLTFkc2RzNH5BbmRyb2lkLTEwLE5va2lhIDguMH41OC42MzUyLH40NS40NTQwNTQg";
      config.headers.ClientDomain= clientDomain;
    }
    console.log("cofig updated-",config);
    return config;
  },
  (error) => {
    Toast.show({
      type: "Error",
      text1: "title",
      text2: error,
      autoHide:true
    })
    showToast('Error',error,'error');
    // Promise.reject(error);
  }
);

export default axiosInstance;