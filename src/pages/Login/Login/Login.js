import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {SignInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
          })
    }
    return (
        <div>
            <h2>Plese Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Login</button>
        </div>
    );
};

export default Login;