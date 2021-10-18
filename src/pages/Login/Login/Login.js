import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookSquare, faGithubSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const {SignInUsingGoogle, SignInUsingFacebook, SignInUsingGithub, SignInUsingTwitter} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
          })
    }

    const handleFacebookLogin = () => {
        SignInUsingFacebook()
        .then(result => {
            history.push(redirect_uri);
          })
    }

    const handleGithubLogin = () => {
        SignInUsingGithub()
        .then(result => {
            history.push(redirect_uri);
          })
    }

    const handleTwitterLogin = () => {
        SignInUsingTwitter()
        .then(result => {
            history.push(redirect_uri);
          })
    }
    return (
        <div className="login-container">
            <div className="text-center">
                <h2>Sign in or create an account</h2>
                <input type="text" />
                <p>--------- or use one option ---------</p>
                <div className="d-flex align-items-center justify-content-center">
                    <button onClick={handleGoogleLogin} className="social-icon">
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    <br />
                    <button onClick={handleFacebookLogin} className="social-icon">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </button>
                    <br />
                    <button onClick={handleGithubLogin} className="social-icon">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </button>
                    <br />
                    <button onClick={handleTwitterLogin} className="social-icon">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;