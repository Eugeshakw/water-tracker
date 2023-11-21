import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import SignLayout from 'components/SignLayout/SignLayout';
import { AuthForm, FormLabel, InputError } from './RegisterPage.styled';
import { Button } from 'common/Button/Button.styled';
import { RouterLink } from 'common/RouterLink/RouterLink.styled';
import { Title } from 'common/Title/Title.styled';
import { Input } from 'common/Input/Input.styled';
import { PasswordInputWrapper } from 'components/PasswordInput/PasswordInput.styled';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router';
import { selectEmail } from 'redux/selectors';
// import { selectError } from 'redux/selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);

  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      navigate('/signin');
    }
  }, [email, navigate]);
  const onSubmit = e => {
    const { email, password } = e;
    dispatch(signUpThunk({ email, password }));
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
      repeatPassword: '',
      strengthScore: 0,
    },
    // validationSchema: signUpSchema,
    onSubmit,
  });

  const handlePasswordChange = e => {
    const password = e.target.value;
    // const score = calculateStrength(password);

    setFieldValue('password', password);
    // setFieldValue('strengthScore', score);
  };
  return (
    <SignLayout>
      <AuthForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <FormLabel>
          Enter your email
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
          Enter your password
          <PasswordInputWrapper>
            <PasswordInput
              name="password"
              value={values.password}
              onChange={handlePasswordChange}
              onBlur={handleBlur}
              placeholder="Password"
              $error={touched.password && errors.password}
            />
            {/* {values.password && (
              <PasswordToolTip
                score={values.strengthScore}
                password={values.password}
              />
            )} */}
          </PasswordInputWrapper>
          {/* {values.password && <PasswordMeter $score={values.strengthScore} />} */}
          {touched.password && errors.password && (
            <InputError>{errors.password}</InputError>
          )}
        </FormLabel>
        <FormLabel>
          Repeat password
          <PasswordInput
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Repeat password"
          />
          {touched.repeatPassword && errors.repeatPassword && (
            <InputError>{errors.repeatPassword}</InputError>
          )}
        </FormLabel>
        <Button type="submit">Sign up</Button>
        <RouterLink to="/signin">Sign in</RouterLink>
      </AuthForm>
    </SignLayout>
  );
};

export default RegisterPage;
