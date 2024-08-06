import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const baseURL = 'https://yourapi.com/api';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor for adding authorization token
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;