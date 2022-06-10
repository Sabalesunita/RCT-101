import { createContext, useState } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isAuth, setisAuth] = useState(false);

	const handleAuth = () => {

		if (!isAuth) {

			axios.post('https://reqres.in/api/login', {
					email: 'eve.holt@reqres.in',
					password: 'cityslicka',
				})
				.then(function (res) {
                    var {token} = res.data;
                    console.log(token);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
		isAuth ? setisAuth(false) : setisAuth(true);
       
	};
	return (
		<AuthContext.Provider value={{ isAuth, handleAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
