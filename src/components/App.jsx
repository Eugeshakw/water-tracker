//import { Routes, Route } from 'react-router-dom';

// import { PublicRoute } from './publickRoute.jsx';
//import Layout from '../components/Layout/Loyout';
// import { PrivateRoute } from './privateRoute';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater';
import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';

export const App = () => {
  return (
    //   <DaysGeneralStats
    //     dateOfMonth="8.3"
    //     dailyNorma="1.2"
    //      fullfilmentOfDailyNorma="1.3"
    //     howManyServings="5.2"
    //    />
    <WhyDrinkWater />
    //    <Routes>
    //      <Route path="/" element={<Layout />}>
    //       <Route index element={'main'} />
    //        <Route path="/signup" element={'SignUpPage'} />
    //        <Route path="/signin" element={'SignInPage'} />
    //        {/* <Route path="register" element={<PublicRoute redirectTo="/" component={'Register'} />} /> */}
    //        <Route path="dashboard" element={''} />
    //        <Route path="/forgot-password" element={'ForgotPasswordPage'} />
    //        <Route path="whydrinkwater" element={<WhyDrinkWater />} />
    //      </Route>
    //    </Routes>
  );
};
