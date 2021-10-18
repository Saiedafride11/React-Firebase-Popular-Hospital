import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider ();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider ();
    const auth = getAuth();

    // Google Sign In Button
    const SignInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => {
            setIsLoading(false)
        })
    }

    // Google Sign In Button
    const SignInUsingFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider)
        .finally(() => {
            setIsLoading(false)
        })
    }

    // Github Sign In Button
    const SignInUsingGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)
        .finally(() => {
            setIsLoading(false)
        })
    }

    // Twitter Sign In Button
    const SignInUsingTwitter = () => {
        setIsLoading(true);
        return signInWithPopup(auth, twitterProvider)
        .finally(() => {
            setIsLoading(false)
        })
    }

    useEffect( () => {
        const unsubscribed =  onAuthStateChanged(auth, user => {
             if (user) {
                 setUser(user)
             } else {
                 setUser({})
             }
             setIsLoading(false);
           });
           return () => unsubscribed;
     }, [])
     
     // SignOut Button
     const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .finally(() => {
            setIsLoading(false)
        })
      }
    return {user, isLoading, SignInUsingGoogle, SignInUsingFacebook, SignInUsingGithub, SignInUsingTwitter, logOut}
};

export default useFirebase;