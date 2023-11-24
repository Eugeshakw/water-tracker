import { Routes, Route } from 'react-router-dom';

// import { PublicRoute } from './publickRoute.jsx';
import Layout from '../components/Layout/Loyout';

// import { PrivateRoute } from './privateRoute';

import LoginPage from '../components/pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import AmountOfWater from './AmountOfWater/AmountOfWater';

import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';
import Welcome from '../components/main/WelcomePage';

import './ForgotPasswordPage';
import ForgotPasswordPage from './ForgotPasswordPage';
// import ResetPasswordForm from './ResetPasswordForm';

import PublicRoute from './publickRoute';
import PrivateRoute from './privateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/auth-operations';
import { useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SettingsModal from './settingsModal/settingsModal';
import { getAllWater, getWaterMonth } from 'redux/water/waterOperations';

export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname;
  const Token = localStorage.getItem('token');

  useEffect(() => {
    if (currentPath === '/HomePage') {
      dispatch(refreshUserThunk());
      dispatch(getAllWater());
      dispatch(getWaterMonth());
    } else if (!Token) {
      // dispatch(refreshUserThunk());
    }
  }, [dispatch, currentPath, Token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route path="dashboard" element={<DaysGeneralStats />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route
          path="/HomePage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="amountofwater"
          element={
            <AmountOfWater countOfWater="250" timeOfDay="7:00" partOfDay="AM" />
          }
        />
      </Route>
      <Route path="/modal" element={<SettingsModal />} />
    </Routes>
  );
};
