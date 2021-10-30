import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const SignIn = () => {

	const { signInUsingGoogle, setIsLoading } = useFirebase();

	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/home';

	// Google SignIn Handle
	const handleGoogleLogin = () => {
		signInUsingGoogle()
			.then(result => {
				history.push(redirect_uri);
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<div className="text-center">
			<h1>Sign In</h1>

			<button style={{ border: 'none', outline: 'none', }} onClick={handleGoogleLogin}>
				<img style={{width: '300px'}} src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" />
			</button>
		</div>
	);
};

export default SignIn;