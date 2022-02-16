import React from 'react';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const {googleSignIn } = useFirebase();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={googleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;