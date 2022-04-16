import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    // navigate(from, { replace: true });
    return (
        <div>

        </div>
    );
};

export default Login;