import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Loyout';
import './ForgotPasswordPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ResetPasswordForm from './ResetPasswordForm';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={'main'} />
          <Route path="/signup" element={'SignUpPage'} />
          <Route path="/signin" element={'SignInPage'} />
          {/* <Route path="register" element={<PublicRoute redirectTo="/" component={'Register'} />} /> */}
          <Route path="dashboard" element={''} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route
            path="/set-new-password/:resetToken"
            element={<ResetPasswordForm />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
