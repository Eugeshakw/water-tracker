import { BrowserRouter as Routes, Route } from 'react-router-dom';

import { PublicRoute } from './publickRoute.jsx';
import Layout from '../components/Layout/Loyout';
// import { PrivateRoute } from './privateRoute';

//import WhyDrinkWater from '../components/WhyDrinkWater/WhyDrinkWater';
// <Route path="/whydrinkwater" element={<WhyDrinkWater />} />

//import WhyDrinkWater from '../components/WhyDrinkWater/WhyDrinkWater';
//<Route path="/whydrinkwater" element={<WhyDrinkWater />} />

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={'main'} />
        <Route path="/signup" element={'SignUpPage'} />
        <Route path="/signin" element={'SigninPage'} />

        <Route
          path="register"
          element={<PublicRoute redirectTo="/" component={'register'} />}
        />

        <Route path="dashboard" element={''} />
        <Route path="/forgot-password" element={'ForgotPasswordPage'} />
      </Route>
    </Routes>
  );
};
