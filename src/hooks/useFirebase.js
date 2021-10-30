import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// Sign In Using Google Account
	const signInUsingGoogle = () => {
		setIsLoading(true)
		return signInWithPopup(auth, googleProvider)

	}

	// On Auth State Change to Observe user State
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({})
			}
			setIsLoading(false)
		})
		return () => unsubscribed;

	}, []);

	const logOut = () => {
		setIsLoading(true)
		signOut(auth)
			.then(() => { })
			.finally(() => setIsLoading(false))
	}

	return {
		user,
		isLoading,
		error,
		success,
		signInUsingGoogle,
		logOut,
		setIsLoading,
		setError,
		setSuccess
	}
}

export default useFirebase;