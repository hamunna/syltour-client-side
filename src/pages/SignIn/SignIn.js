import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {

	const { signInUsingGoogle, setIsLoading } = useAuth();

	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/';

	// Google SignIn Handle
	const handleGoogleLogin = () => {
		signInUsingGoogle()
			.then(result => {
				console.log(result);
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