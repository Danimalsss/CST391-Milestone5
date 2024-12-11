import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const authToken = sessionStorage.getItem('authToken'); // Check if the user is logged in

    return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
