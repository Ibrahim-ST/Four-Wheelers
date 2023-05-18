import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            Login
            <Link to='/signup'><p>Sign Up</p></Link>
        </div>
    );
};

export default Login;