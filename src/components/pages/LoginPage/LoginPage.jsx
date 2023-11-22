import React, { useState } from 'react';
import { useFormik } from 'formik';
import SignLayout from 'components/SignLayout/SignLayout';
import {
  AuthForm,
  FormLabel,
  InputError,
} from '../RegisterPage/RegisterPage.styled';
import { Title } from 'common/Title/Title.styled';
import { Input } from 'common/Input/Input.styled';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import { Button } from 'common/Button/Button.styled';
import { RouterLink } from 'common/RouterLink/RouterLink.styled';
import { useDispatch } from 'react-redux';
import { signInThunk } from 'redux/auth/auth-operations';
import { signInSchema } from 'common/validation/validationSchema';
import { checkPasswordStrength } from '../../../common/validation/passwordStrength.js';
const LoginPage = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState('');
  const onSubmit = e => {
    dispatch(signInThunk(e));
  };

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit,
  });

  const onChangeInp = event => {
    const { color: newColor } = checkPasswordStrength(values.password);
    setColor(newColor);
    setFieldValue('password', event.target.value);
  };
  return (
    <SignLayout>
      <AuthForm onSubmit={handleSubmit}>
        <Title>Sign in</Title>
        <FormLabel>
          Enter email
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            $error={touched.email && errors.email}
          />
          {touched.email && errors.email && (
            <InputError>{errors.email}</InputError>
          )}
        </FormLabel>
        <FormLabel>
          Enter password
          <PasswordInput
            name="password"
            value={values.password}
            onChange={onChangeInp}
            style={{ borderColor: color }}
            onBlur={handleBlur}
            placeholder="Password"
            $error={touched.password && errors.password}
          />
          {touched.password && errors.password && (
            <InputError>{errors.password}</InputError>
          )}
        </FormLabel>
        <Button type="submit">Sign in</Button>
        <RouterLink to="/forgot-password">Forgot password?</RouterLink>
        <RouterLink to="/signup">Sign up</RouterLink>
      </AuthForm>
    </SignLayout>
  );
};

export default LoginPage;
