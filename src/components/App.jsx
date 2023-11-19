import { Routes, Route } from 'react-router-dom';

// import { PublicRoute } from './publickRoute.jsx';
import Layout from '../components/Layout/Loyout';

// import { PrivateRoute } from './privateRoute';

import LoginPage from '../components/pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater';

import AmountOfWater from './AmountOfWater/AmountOfWater';

import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';
import Welcome from '../components/main/WelcomePage';

import './ForgotPasswordPage';
import ForgotPasswordPage from './ForgotPasswordPage';
// import ResetPasswordForm from './ResetPasswordForm';
import HomePage from './DailyNorma/HomePage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />

        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />

        <Route path="dashboard" element={<DaysGeneralStats />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route path="/HomePage" element={<HomePage />} />

        <Route path="whydrinkwater" element={<WhyDrinkWater />} />
        <Route
          path="amountofwater"
          element={
            <AmountOfWater countOfWater="250" timeOfDay="7:00" partOfDay="AM" />
          }
        />
      </Route>
    </Routes>
  );
};
