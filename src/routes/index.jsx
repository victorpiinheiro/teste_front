import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login/Login';
import HomePage from '../pages/Home/HomePage';
import Eventos from '../pages/Eventos/Eventos';

import PrivateRoutes from './PrivateRoutes';

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />}>
          
          <Route path="eventos" element={<Eventos />} />
        </Route>
      </Route>
    </Routes>
  );
}
