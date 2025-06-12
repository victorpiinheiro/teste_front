import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login/Login';
import HomePage from '../pages/Home/HomePage';
import Eventos from '../pages/Eventos/Eventos';

import PrivateRoutes from './PrivateRoutes';
import Page404 from '../pages/Page404/Page404';

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />}>
          
          <Route path="eventos" element={<Eventos />} />
        </Route>
      </Route>

      <Route path="*" element={<Page404 />} />

    </Routes>
  );
}
