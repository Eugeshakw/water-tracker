import { Routes, Route } from 'react-router-dom';

// import { PublicRoute } from './publickRoute.jsx';
import Layout from '../components/Layout/Loyout';
// import { PrivateRoute } from './privateRoute';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater';

export const App = () => {
  return (
    <WhyDrinkWater />
    //  <Routes>
    //    <Route path="/" element={<Layout />}>
    //      <Route index element={'main'} />
    //      <Route path="/signup" element={'SignUpPage'} />
    //      <Route path="/signin" element={'SignInPage'} />
    //      {/* <Route path="register" element={<PublicRoute redirectTo="/" component={'Register'} />} /> */}
    //      <Route path="dashboard" element={''} />
    //      <Route path="/forgot-password" element={'ForgotPasswordPage'} />
    //      <Route path="whydrinkwater" element={<WhyDrinkWater />} />
    //    </Route>
    //  </Routes>
  );
};
