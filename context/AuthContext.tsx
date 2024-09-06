import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import { Children, createContext, useContext, useReducer, useState } from 'react';
import axiosInstance from '~/services/HttpInterceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppUtil from '~/services/util/AppUtil';
import { authorizeUser, fetchUserDeatils } from '~/services/Authentication.service';
import { useLoader } from './LoaderContext';
import showToast from '~/components/ToastMessage';
interface AuthProps {
	authState: { authenticated: boolean | null; username: string | null; token: string | null };
	onLogin: (username: string, password: string, companyCode: string, domainUrl: string) => void;
	onDomainUpdate: (username: string, password: string, companyCode: string, domainUrl: string) => void;
	onLogout: () => void;
	onPpersistLogin:()=>void;
}

const AuthContext = createContext<Partial<AuthProps>>({});
const AuthDispatcherContext = createContext(null);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
	const {showLoader, hideLoader}= useLoader();
	const [authState, setAuthState] = useState<{
		authenticated: boolean | null;
		username: string | null;
		token: string | null;
	}>({
		authenticated: null,
		username: null,
		token: null,
	});
	const persistLogin = async()=>{
		if(authState?.authenticated === null){
		const accessToken = await AsyncStorage.getItem('accessToken');
		const employeesData = await AsyncStorage.getItem('employeeData');
		console.log("persist login ", authState,"data-",employeesData,accessToken);
		showLoader();
		if(accessToken && employeesData){
			console.log("persist login-- ", authState);
			setAuthState({
				authenticated: true,
				username: employeesData,
				token: accessToken
			});	
			hideLoader();
		}
		hideLoader();
	}
					
	}
	const login = (username: string, password: string, companyCode: string, domainUrl: string) => {
		showLoader();
		if (username && password && companyCode && domainUrl) {
			authorizeUser({username:username,companyCode:companyCode,password:password})
				.then((response:any) => {
					const userdata = AppUtil._deepCopy(response.data);
					if(userdata.access_token){
					const accessToken = userdata.access_token;
					const expiresIn = userdata.expires_in;
					console.log("response from API1->accessToken",accessToken);
					AsyncStorage.setItem('apiUrl',domainUrl);
					AsyncStorage.setItem('ClientDomain',companyCode);
					AsyncStorage.setItem('accessToken',accessToken);
					setAuthState({
						authenticated: true,
						username: username,
						token: accessToken
					});
					showToast('Login','You Logged in successfully','success');
					fetchUserDeatils().then((responseObj:any) => {
						const userInfo = AppUtil._deepCopy(responseObj.data);
						console.log("userdata 200",userInfo.responseObject);
						if(userInfo.responseObject.httpCode === 200){	
						console.log("userdata",userInfo.responseObject.response.firstName);
						AsyncStorage.setItem('employeeData',userInfo.responseObject.response.firstName);
						hideLoader();
						}
					})
					.catch(error => {
						hideLoader();
						console.error("Error user data: ", error);
					});
				}
				})
				.catch(error => {
					hideLoader();
					showToast('Login','Authorization failed with error: '+ error,'error');
					console.error("Error sending data: ", error);
				});
				
		} else {
			hideLoader();
			showToast('Login','Authorization failed with error','error');
		}
	};

	const logout = async () => {
		AsyncStorage.removeItem('apiUrl'); 
		AsyncStorage.removeItem('accessToken'); 
		AsyncStorage.removeItem('ClientDomain');
		AsyncStorage.removeItem('employeeData');
		setAuthState({
			authenticated: null,
			username: null,
			token: null
		});
	};

	const domain = async (username: string, password: string, companyCode: string, domainUrl: string) => {
		setAuthState({
			authenticated: false,
			username: null,
			token: null
		});
	};


	const value = {
		onLogin: login,
		onLogout: logout,
		onPpersistLogin:persistLogin,
		authState
	};

	return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>);
};

