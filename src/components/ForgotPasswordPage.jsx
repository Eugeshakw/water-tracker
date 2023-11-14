import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setEmailError(isValid ? '' : 'Enter a valid email');
    return isValid;
  };

  const handleSend = async () => {
    if (validateEmail()) {
      try {
        const response = await fetch('http://localhost:1111/api/auth/forgotPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          setNotification(`Instructions for submitting a password have been sent to your e-mail.`);
          // setResetToken(data.resetToken); // Removed this line
        } else {
          setNotification(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error sending reset password request:', error);
        setNotification('Error sending reset password request.');
      }
    }
  };

  useEffect(() => {
    // setResetToken(tokenFromURL); // Removed this line
  }, []);

  const handleNavigateToSignIn = () => {
    navigate('/signin');
  };

  return (
    <div>
      <div className='container'>
        <div className='tab-cont-form'>
          <h2 className='h2-forgot-pass-page'>Forgot Password</h2>
          <form>
            <div>
              <label className='label-forgot-pass-page'>Enter your email</label>
              <br />
              <input
                type='email'
                className='input-forgot-pass-page'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              {emailError && (
                <p className='p-input-error-forgot-pass-page'>{emailError}</p>
              )}
            </div>
            <button type='button' className='send-forgot-pass-page' onClick={handleSend}>
              Send
            </button>
          </form>
          {notification && <p className='p-forgot-pass-page'>{notification}</p>}
          <div>
            <p className='p-forgot-pass-page'>Already have an account? </p>
            <Link to='/signin' className='link-forgot-pass-page' onClick={handleNavigateToSignIn}>
              Sign In
            </Link>
          </div>
        </div>
        <div className='img-dec-forgot-pass-page'></div>
        <div className='img-patern-forgot-pass-page'></div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
