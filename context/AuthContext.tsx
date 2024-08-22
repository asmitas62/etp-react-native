import { Children, createContext, useContext, useReducer, useState } from 'react';
import {Text} from 'react-native';

export enum Role {
	ADMIN = 'admin',
	USER = 'user'
}

interface AuthProps {
	authState: { authenticated: boolean | null; username: string | null; role: Role | null };
	onLogin: (username: string, password: string, companyCode: string,domainUrl: string) => void;
	onDomainUpdate: (username: string, password: string, employeeCode: string, domainUrl: string)=>void;
	onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});
const AuthDispatcherContext = createContext(null);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
	const [authState, setAuthState] = useState<{
		authenticated: boolean | null;
		username: string | null;
		role: Role | null;
	}>({
		authenticated: null,
		username: null,
		role: null
	});

	const login = (username: string, password: string, employeeCode: string) => {
		if (username === 'admin' && password === 'admin' && employeeCode ==='admin') {
			setAuthState({
				authenticated: true,
				username: username,
				role: Role.ADMIN
			});
		} else if (username === 'user' && password === 'user' && employeeCode==='user') {
			setAuthState({
				authenticated: true,
				username: username,
				role: Role.USER
			});
		} else {
			alert('Invalid username or password!');
		}
	};

	const logout = async () => {
		setAuthState({
			authenticated: false,
			username: null,
			role: null
		});
	};

	const domain = async (username: string, password: string, employeeCode: string, domainUrl: string) => {
		setAuthState({
			authenticated: false,
			username: null,
			role: null
		});
	};


	const value = {
		onLogin: login,
		onDomainUpdate: domain,
		onLogout: logout,
		authState
	};

	return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>);
};
