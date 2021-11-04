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
				history.push(redirect_uri);
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<div className="text-center" style={{margin: '200px auto'}}>
			<h1 className="text-center fw-bold theme-secondary-text border-bottom pb-2 mb-2 text-uppercase">sign In</h1>

			<button style={{ border: 'none', outline: 'none', }} onClick={handleGoogleLogin}>
				<img style={{width: '300px'}} src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" />
			</button>
		</div>
	);
};

export default SignIn;