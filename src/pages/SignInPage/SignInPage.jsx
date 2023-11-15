import SignLayout from 'components/SignLayout/SignLayout';
import { Field, Form, useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const onSubmit = event => {};
  const { values, touched, errors, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <h1>Sign In</h1>
        <label>
          Enter email
          <Field
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            $error={touched.email && errors.email}
          />
          {/* {touched.email && errors.email&&()} */}
        </label>
        <label>
          Enter password
          <input
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="password"
            $error={touched.password && errors.password}
          />
          {/* {touched.password && errors.password&&()} */}
        </label>
        <button type="submit">Sign in</button>
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup">Sign up</Link>
      </Form>
    </div>
  );
};

export default SignIn;
