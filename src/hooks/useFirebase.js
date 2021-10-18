import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const SignInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () => {
        const unsubscribed =  onAuthStateChanged(auth, user => {
             if (user) {
                 setUser(user)
             } else {
                 setUser({})
             }
           });
           return () => unsubscribed;
     }, [])
     
     const logOut = () => {
          signOut(auth)
          .then(() => {})
      }
    return {user, SignInUsingGoogle, logOut}
};

export default useFirebase;