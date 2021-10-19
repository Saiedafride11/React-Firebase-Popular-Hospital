import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookSquare, faGithubSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const { isLogIn, error,
            successAccount, successLogin,
            SignInUsingGoogle,
            SignInUsingFacebook,
            SignInUsingGithub,
            SignInUsingTwitter,
            handleToggleLogIn,
            handleNameBlur,
            handleEmailBlur,
            handlePasswordBlur,
            handleSubmit,
            handleResetPassword
                        } = useAuth();
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
    const handleEmailPasswordSubmit = (event) => {
        event.preventDefault();
        history.push(redirect_uri);
        handleSubmit();
    }
    return (
        <div className="container">
            <div className="login-container py-5">
                <div className="">
                    <h3 style={{color: '#1976d2'}}>Sign in or create an account</h3>
                    <form onSubmit={handleEmailPasswordSubmit} className="my-4">
                        <h4 className="text-center" style={{color: '#6c757d'}}>Plese <span style={{color: '#1976d2'}}>{isLogIn ? 'Log In' : 'Register'}</span></h4>
                        {
                            !isLogIn && <div className="row mb-3">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-md-10 col-12">
                                    <input onBlur={handleNameBlur} type="text" id="name" className="form-control" placeholder="Your Name"/>
                                </div>
                            </div>
                        }
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-md-10 col-12">
                                <input onBlur={handleEmailBlur} type="email" className="form-control" id="inputEmail3" placeholder="Your Email" required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label password">Password</label>
                            <div className="col-md-10 col-12">
                                <input onBlur={handlePasswordBlur} type="password" className="form-control" id="inputPassword3" placeholder="Your Password" required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={handleToggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger text-center">
                            <span className="text-center">{error}</span>
                            {   
                                !isLogIn ?
                                <span className="text-success">{successAccount}</span>
                                :
                                <span className="text-success">{successLogin}</span>
                            }
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                {isLogIn ? 'Log In' : 'Register'}
                            </button>
                            <br />
                            <br />
                            <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset Password</button>
                        </div>
                    </form>
                    <p className="text-center">--------- or use one option ---------</p>
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
        </div>
    );
};

export default Login;