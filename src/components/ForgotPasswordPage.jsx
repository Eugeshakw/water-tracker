import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import '../styles/ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [notification] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setEmailError(isValid ? '' : 'Enter a valid email');
    return isValid;
  };

  const handleSend = () => {
    if (validateEmail()) {
      // Викликати ваш API для відправлення запиту на відновлення паролю
      // Замість console.log тут буде реальний виклик API
      console.log(`Відправка запиту на відновлення паролю для ${email}`);

      // Спробуємо симулювати помилку для прикладу
      // Замість цього додайте реальний виклик API з обробкою помилок
    
    }
  };


  return (
      <div>
          <div className='container'>
              
              <div className='tab-cont-form'>
      <h2 className='h2-forgot-pass-page'>Forgot Password</h2>
      <form>
        <div>
            <label className='label-forgot-pass-page'>Enter your email</label>
            <br></br>
          <input
            type="email"
            className='input-forgot-pass-page'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <p className='p-input-error-forgot-pass-page'>{emailError}</p>}
        </div>
        <button type="button" className='send-forgot-pass-page' onClick={handleSend}>
          Send
        </button>
      </form>
      {notification && <p className='p-forgot-pass-page'>{notification}</p>}
      <div>
        <p className='p-forgot-pass-page'>Already have an account? </p>
       
                      <Link to='/signin' className='link-forgot-pass-page'>Sign In</Link>
                      </div>

              </div>
              <div className='img-dec-forgot-pass-page'></div>
              <div className='img-patern-forgot-pass-page'></div>
          </div>
          </div>
  );
};

export default ForgotPasswordPage;
