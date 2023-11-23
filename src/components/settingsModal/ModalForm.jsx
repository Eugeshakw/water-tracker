import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
// import { selectorUserProfile } from 'redux/auth/auth-selectors';

import PasswordInput from 'components/PasswordInput/PasswordInput';

import css from './settingsModal.module.css';
import { useSelector } from 'react-redux';

import { updateProfileThunk } from 'redux/auth/auth-operations';
import { selectId } from 'redux/selectors';
import { checkPasswordStrength } from 'common/validation/passwordStrength';
// import { updateUserProfileSchema } from '../../common/validation/validationSchema';

const ModalForm = () => {
  const selectorUserProfile = state => state.auth.user;
  const userProfile = useSelector(selectorUserProfile);

  const id = useSelector(selectId);
  const dispatch = useDispatch();

  const onSubmit = values => {
    const { gender, name, email, oldPassword, newPassword } = values;
    const updatedValues = {
      // Проверяем каждое поле и добавляем только непустые значения в объект
      ...(gender && { gender }),
      ...(name && { name: name }),
      ...(email && { email: email }),
      ...(oldPassword && { outdatedPassword: oldPassword }),
      ...(newPassword && { newPassword }),
      id,
    };

    dispatch(updateProfileThunk(updatedValues))
      .unwrap()
      .then(() => {
        console.log('succes');
        resetForm();
      });
  };

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      gender: '',
      name: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
      newColor: '',
      oldColor: '',
      repeatColor: '',
    },


    onSubmit: values => {
      const { gender, nameInput, emailInp, oldPassword, newPassword } = values;
      const updatedValues = {
        // Проверяем каждое поле и добавляем только непустые значения в объект
        ...(gender && { gender }),
        ...(nameInput && { name: nameInput }),
        ...(emailInp && { email: emailInp }),
        ...(oldPassword && { outdatedPassword: oldPassword }),
        ...(newPassword && { newPassword }),
        id,
      };
      console.log(updatedValues);
      dispatch(updateProfileThunk(updatedValues))
        .unwrap()
        .then(() => {
        localStorage.removeItem('userEmail');
        localStorage.setItem('userEmail', updatedValues.name);  
        console.log('success');
});
    },

  });

  // У меня не работает валидация полей ввода пароля через YUP  FORMIK, почему?

  useEffect(() => {
    // Проверяем значение gender из Redux и устанавливаем соответствующий радиобаттон
    if (userProfile.gender === 'female' || userProfile.gender === 'male') {
      setFieldValue('gender', userProfile.gender);
    }
  }, [setFieldValue, userProfile.gender]);

  const handlePasswordChange = e => {
    const password = e.target.value;
    console.log(password);
    const input = e.target.name;
    const { color: newColor } = checkPasswordStrength(password);
    if (input === 'oldPassword') {
      setFieldValue('oldColor', newColor);
      setFieldValue('oldPassword', password);
    }
    if (input === 'newPassword') {
      setFieldValue('newColor', newColor);

      setFieldValue('newPassword', password);
    }
    if (input === 'repeatPassword') {
      setFieldValue('repeatColor', newColor);

      setFieldValue('repeatPassword', password);
    }
  };

  return (
    <form className={css.modal_form_user} onSubmit={handleSubmit}>
      <div className={css.all_inp_cont}>
        <div className={css.user_info_container}>
          <div className={css.modal_gender_block}>
            <p className={css.modal_gender_text}>Your gender identity</p>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === 'female'}
              className={css.gender_input}
            />

            <label htmlFor="Girl" className={`${css.gender_label} `}>
              Girl
            </label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === 'male'}
              className={css.gender_input}
            />
            <label htmlFor="Man" className={`${css.gender_label} `}>
              Man
            </label>
          </div>

          <label htmlFor="name" className={css.dataLabel}>
            Your name
          </label>
          <input
            name="name"
            type="text"
            placeholder={userProfile.name ?? 'David'}
            id="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            className={`${css.modal_input} ${css.modal_input_data}`}
          />
          <label htmlFor="email" className={css.dataLabel}>
            E-mail
          </label>
          <input
            type="text"
            placeholder={userProfile.email ?? 'david01@gmail.com'}
            id="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            className={`${css.modal_input} ${css.modal_input_data}`}
          />
        </div>

        <div className={css.modal_password_inp}>
          <p className={css.modal_password_text}>Password</p>

          <div className={css.passwordInputContainer}>
            <label htmlFor="oldPassword" className={css.password_label}>
              Outdated password:
            </label>
            <div className={css.inputContainer}>
              {/* <input type={pass ? 'text' : 'password'} /> */}
              <PasswordInput
                name="oldPassword"
                value={values.oldPassword || ''}
                onChange={handlePasswordChange}
                placeholder="Password"
                id="oldPassword"
                onBlur={handleBlur}
                // style={{ borderColor: values.oldColor }}
                className={`${css.modal_input} ${css.modal_input_password}`}
              />
              {/* <div
                className={css.togglePasswordIcon}
                onClick={() => {
                  handleTogglePassword('outdated');
                }}
              >
                <EyeIcon />
              </div> */}
            </div>
          </div>

          <div className={css.passwordInputContainer}>
            <label htmlFor="newPassword" className={css.password_label}>
              New Password:
            </label>
            <div className={css.inputContainer}>
              <PasswordInput
                name="newPassword"
                value={values.newPassword || ''}
                onChange={handlePasswordChange}
                placeholder="Password"
                id="newPassword"
                onBlur={handleBlur}
                // style={{ borderColor: values.newColor }}
                // ref={inputRefs.newPas}
                className={`${css.modal_input} ${css.modal_input_password}`}
              />
              {/* <input
                type={pass ? 'text' : 'password'}
                value={values.newPas || ''}
                onChange={handlePasswordChange}
                placeholder="Password"
                id="newPas"
                onBlur={handleBlur}
                // ref={inputRefs.newPas}
                className={`${css.modal_input} ${css.modal_input_password}`}
              /> */}
              {/* <div
                className={css.togglePasswordIcon}
                onClick={() => {
                  handleTogglePassword('new');
                }}
              >
                <EyeIcon />
              </div> */}
            </div>
          </div>
          <div className={css.passwordInputContainer}>
            <label htmlFor="repeatPassword" className={css.password_label}>
              Repeat new password:
            </label>

            <div className={css.inputContainer}>
              <PasswordInput
                name="repeatPassword"
                value={values.repeatPassword || ''}
                onChange={handlePasswordChange}
                // style={{ borderColor: values.repeatColor }}
                placeholder="Password"
                id="repeatPassword"
                onBlur={handleBlur}
                // ref={inputRefs.repeatPas}
                className={`${css.modal_input} ${css.modal_input_password}`}
                $error={touched.repeatPassword && errors.repeatPassword}
              />
              {/* <input
                type={pass ? 'text' : 'password'}
                value={values.repeatPas || ''}
                onChange={handlePasswordChange}
                placeholder="Password"
                id="repeatPas"
                onBlur={handleBlur}
                // ref={inputRefs.repeatPas}
                className={`${css.modal_input} ${css.modal_input_password}`}
                $error={touched.repeatPassword && errors.repeatPassword}
              />
              <div
                className={css.togglePasswordIcon}
                onClick={() => {
                  handleTogglePassword('repeat');
                }}
              >
                <EyeIcon />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className={css.modal_form_submit}>
        Save
      </button>
    </form>
  );
};

export default ModalForm;
