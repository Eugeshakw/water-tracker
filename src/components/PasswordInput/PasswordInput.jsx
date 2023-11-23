import { useState } from 'react';

import { PasswordInputStyled } from './PasswordInput.styled';
import { Input } from 'common/Input/Input.styled';
import { ReactComponent as EyeIcon } from '../settingsModal/icons/eye.svg';

const PasswordInput = ({ style, ...fields }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputStyled>
      <Input
        type={showPassword ? 'text' : 'password'}
        {...fields}
        style={style}
      />
      <button
        onClick={togglePassword}
        type="button"
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <EyeIcon />
      </button>
    </PasswordInputStyled>
  );
};

export default PasswordInput;
