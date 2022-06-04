import { Outlet, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';

const useAuth = () => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  return user && Object.keys(user).length > 0
}


const ProtectedRouted = () => {
  const auth = useAuth()
  return auth ? <Outlet /> : <Navigate to='/signin' replace={true} />;
};

export default ProtectedRouted;
