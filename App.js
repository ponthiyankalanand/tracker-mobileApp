import React from 'react';
import Login from './screen/login';
import Home from './screen/home';
import SignUp from './screen/webViewSignup';
import Navigator from './route/homeStack'


export default function App(){
	 return(
		<Navigator />
		);
}
