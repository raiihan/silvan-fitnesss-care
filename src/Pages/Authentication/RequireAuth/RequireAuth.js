import React from 'react';
import {
    useLocation,
    Navigate,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState();
    const location = useLocation()

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;