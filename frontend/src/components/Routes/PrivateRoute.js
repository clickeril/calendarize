import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider'; // Pastikan path ini sesuai dengan lokasi AuthProvider.js Anda

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />; // Arahkan ke halaman login jika pengguna belum login
  }

  return children;
};

export default PrivateRoute;
