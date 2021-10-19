import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged,
          signOut, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider,
          createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,
          sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [successAccount, setSuccessAccount] = useState('')
    const [successLogin, setSuccessLogin] = useState('')
    const [isLogIn, setIsLogIn] = useState(false)

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

    // Facebook Sign In Button
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

// ----------------------------------------------------------------------------
      // Email and password verification
// ----------------------------------------------------------------------------
const handleToggleLogIn = (event) => {
    setIsLogIn(event.target.checked);
  }
  const handleNameBlur = (event) => {
    setName(event.target.value);
  }
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value)
  }
  
  // Submit email & password
  const handleSubmit = (event) => {
    event.preventDefault();
    if(password.length < 6){
      setError('Password Must be 6 characters long');
      setSuccessAccount('');
      setSuccessLogin('');
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setError('Password Must Contain 2 Upper Case ');
      setSuccessAccount('');
      setSuccessLogin('');
      return;
    }
    else{
      setSuccessAccount('Register Successfully, Now Click Already Registered')
      setSuccessLogin('Login And Check Your Email And Verify Please')
    }
    isLogIn ? processLogIn(email, password) : registerNewUser(email, password)
  }
  
  // processLogIn
  const processLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      setError('');
      verifyEmail();
      setUserName();
    })
    .catch(error => {
      setError(error.message);
    })
  }
  
  // registerNewUser
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      setError('')
    })
    .catch(error => {
      setError(error.message);
    })
  }
  
  // setUserName
  const setUserName = () => {
    updateProfile(auth.currentUser, {displayName: name})
    .then(result => {
    })
  }
  
  // verifyEmail
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(result => {
    });
  }
  
  // Reset Password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(result => {
    })
  }

    return {user,
            isLoading,
            isLogIn,
            error,
            successAccount,
            successLogin,
            SignInUsingGoogle,
            SignInUsingFacebook,
            SignInUsingGithub,
            SignInUsingTwitter,
            handleToggleLogIn,
            handleNameBlur,
            handleEmailBlur,
            handlePasswordBlur,
            handleSubmit,
            handleResetPassword,
            logOut
        }
};

export default useFirebase;