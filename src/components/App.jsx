
import { Routes, Route } from 'react-router-dom';

// import { PublicRoute } from './publickRoute.jsx';
import Layout from '../components/Layout/Loyout';

// import { PrivateRoute } from './privateRoute';

import WelcomePage from '../components/WelcomePage/WelcomePage';

import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater';
import SignIn from 'pages/SignInPage/SignInPage';



export const App = () => {
  return (
    
   
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={'main'} />
        <Route path="/signup" element={'SignUpPage'} />
        <Route path="/signin" element={<SignIn/>} />
        {/* <Route path="register" element={<PublicRoute redirectTo="/" component={'Register'} />} /> */}
        <Route path="dashboard" element={''} />

        <Route path='/forgot-password' element={"ForgotPasswordPage"}/>
        <Route path="welcomepage" element={<WelcomePage />} />


       
        <Route path="whydrinkwater" element={<WhyDrinkWater />} />
        {/* впавпварпр */}


      </Route>
    </Routes>
   
    
  );
};
