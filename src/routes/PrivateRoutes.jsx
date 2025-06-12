import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const tokenFake = localStorage.getItem('Token');

  return tokenFake ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
