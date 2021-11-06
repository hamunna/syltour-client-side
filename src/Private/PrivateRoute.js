import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {

	const { user, isLoading } = useAuth();
	
	if (isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}
	
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/signIn",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;