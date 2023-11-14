
import { Routes, Route } from 'react-router-dom';

// import { PublicRoute } from './publickRoute.jsx';
import Layout from '../components/Layout/Loyout';

// import { PrivateRoute } from './privateRoute';

import WelcomePage from '../components/WelcomePage/WelcomePage';
import LoginPage from '../components/pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater';

import './ForgotPasswordPage';
import ForgotPasswordPage from './ForgotPasswordPage';
// import ResetPasswordForm from './ResetPasswordForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={'main'} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />

        <Route path="dashboard" element={''} />

        <Route path='/forgot-password' element={"ForgotPasswordPage"} />
        <Route path="welcomepage" element={<WelcomePage />} />

        <Route path="whydrinkwater" element={<WhyDrinkWater />} />
      </Route>
    </Routes>

  );
};
