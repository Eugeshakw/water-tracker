import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/ResetPasswordForm.css';

const ResetPasswordForm = () => {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleResetPassword = async () => {
    try {
      if (newPassword !== repeatNewPassword) {
        setNotification("Passwords do not match");
        return;
      }

      const response = await fetch(`http://localhost:1111/api/auth/resetPassword/${resetToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();

      console.log('Response from server:', data);

      if (response.ok) {
        setNotification(data.message);
      } else {
        setNotification(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error updating password:', error);

      if (error instanceof SyntaxError) {
        setNotification('Error parsing server response.');
      } else {
        setNotification('Error updating password.');
      }
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='tab-cont-form'>
          <h2 className='h2-forgot-pass-page'>Set New Password</h2>
          <form>
            <div>
              <label className='label-forgot-pass-page'>New Password</label>
              <br />
              <input
                type="password"
                className='input-forgot-pass-page'
                placeholder='Your password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label className='label-forgot-pass-page'>Repeat Password</label>
              <br />
              <input
                type="password"
                className='input-forgot-pass-page'
                placeholder='Your password'
                value={repeatNewPassword}
                onChange={(e) => setRepeatNewPassword(e.target.value)}
              />
            </div>
            <button type="button" className='send-forgot-pass-page' onClick={handleResetPassword}>
              Send
            </button>
          </form>
          {notification && <p className='p-forgot-pass-page'>{notification}</p>}
          <div>
            <p className='p-forgot-pass-page'>Already have an account? </p>
            <Link to='/signin' className='link-forgot-pass-page'>
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

export default ResetPasswordForm;
