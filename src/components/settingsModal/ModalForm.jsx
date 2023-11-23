import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
// import { selectorUserProfile } from 'redux/auth/auth-selectors';

import PasswordInput from 'components/PasswordInput/PasswordInput';

import css from './settingsModal.module.css';
import { useSelector } from 'react-redux';

import { updateProfileThunk } from 'redux/auth/auth-operations';
import { selectId } from 'redux/selectors';
const ModalForm = ({ onClose }) => {
  // const selectorUserProfile = state => state.auth.user;
  // const userProfile = useSelector(selectorUserProfile);
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    // resetForm,
  } = useFormik({
    initialValues: {
      gender: '',
      nameInput: '',
      emailInp: '',
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
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

  const handlePasswordChange = e => {
    // const password = e.target.value;
    handleChange(e);
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

          <label htmlFor="nameInput" className={css.dataLabel}>
            Your name
          </label>
          <input
            type="text"
            placeholder="David"
            id="nameInput"
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${css.modal_input} ${css.modal_input_data}`}
          />
          <label htmlFor="emailInp" className={css.dataLabel}>
            E-mail
          </label>
          <input
            type="text"
            placeholder="david01@gmail.com"
            id="emailInp"
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${css.modal_input} ${css.modal_input_data}`}
          />
        </div>

        <div className={css.modal_password_inp}>
          <p className={css.modal_password_text}>Password</p>

          <div className={css.passwordInputContainer}>
            <label htmlFor="outdatedPas" className={css.password_label}>
              Outdated password:
            </label>
            <div className={css.inputContainer}>
              {/* <input type={pass ? 'text' : 'password'} /> */}
              <PasswordInput
                value={values.oldPassword || ''}
                onChange={handlePasswordChange}
                placeholder="Password"
                id="oldPassword"
                onBlur={handleBlur}
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
            <label htmlFor="newPas" className={css.password_label}>
              New Password:
            </label>
            <div className={css.inputContainer}>
              <PasswordInput
                value={values.newPassword || ''}
                onChange={handlePasswordChange}
                placeholder="Password"
                id="newPassword"
                onBlur={handleBlur}
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
            <label htmlFor="repeatPas" className={css.password_label}>
              Repeat new password:
            </label>

            <div className={css.inputContainer}>
              <PasswordInput
                value={values.repeatPassword || ''}
                onChange={handlePasswordChange}
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
