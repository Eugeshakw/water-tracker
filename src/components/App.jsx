import ForgotPasswordPage from './ForgotPasswordPage';
import {Routes, Route} from 'react-router-dom';
// import { PublicRoute } from './publickRoute.jsx';
import Layout from '../components/Layout/Loyout'
// import { PrivateRoute } from './privateRoute';
import WelcomePage from '../components/WelcomePage/WelcomePage';
export const App = () => {
  return (
    
   
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={'main'} />
        <Route path="/signup" element={'SignUpPage'} />
        <Route path="/signin" element={'SignInPage'} />
        {/* <Route path="register" element={<PublicRoute redirectTo="/" component={'Register'} />} /> */}
        <Route path="dashboard" element={''} />
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
        <Route path="welcomepage" element={<WelcomePage />} />
      </Route>
    </Routes>
  
   
    
  );
};
