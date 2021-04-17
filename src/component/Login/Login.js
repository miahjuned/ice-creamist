import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import { googleSignIn, initialiseSignIn } from './firebaseManager';

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    initialiseSignIn();
    // Login using google

    const [googleUser, setGoogleUser] = useState({});
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
        .then(res => {
            setGoogleUser(res);
            // res set context API
            setLoggedInUser(res);
            // Redirect user after Loggedin
            history.replace(from);
        })
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn}>Sign In with google</Button>
        </div>
    );
};

export default Login;