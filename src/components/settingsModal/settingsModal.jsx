import React, { useState } from 'react';
import css from './settingsModal.module.css';
import img from './ars.png';
import { ReactComponent as UploadIcon } from './icons/outline.svg';
import { ReactComponent as EyeIcon } from './icons/eye.svg';

const SettingsModal = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [outdatedPassword, setOutdatedPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  const handleTogglePassword = event => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.settings_flex_container}>
          <b className={css.modal_setting}>Setting</b>
          {/* <svg class="close-modal" viewBox="0 0 24 24">
            <use href=""></use>
          </svg> */}
        </div>

        <p className={css.modal_photo_text}>Your Photo</p>
        <ul className={css.modal_photo_list}>
          <li className={css.modal_list_photo}>
            {selectedFile ? (
              <div className={css.photo_div}>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  className={css.image_modal}
                  alt=""
                />
              </div>
            ) : (
              <div className={css.photo_div}>
                <img src={img} alt="" className={css.image_modal} />
              </div>
            )}
          </li>
          <li className={css.modal_list_upload}>
            <label htmlFor="fileInput">
              <div className={css.upload_container}>
                <span className={css.uploadIcon}>
                  <UploadIcon />
                </span>
                <span className={css.uploadText}>Upload a photo</span>
              </div>
            </label>

            <input
              id="fileInput"
              className={`${css.modal_list_input} ${css.modal_list_upload_input}`}
              type="file"
              name="photo"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
            />
          </li>
        </ul>

        <form className={css.modal_form_user} onSubmit={handleSubmit}>
          <div className={css.modal_gender_block}>
            <p className={css.modal_gender_text}>Your gender identity</p>
            <input type="radio" value="girl" id="Girl" name="gender" />
            <label htmlFor="Girl" className={`${css.gender_label} `}>
              Girl
            </label>
            <input type="radio" value="man" id="Man" name="gender" />
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
            className={`${css.modal_input} ${css.modal_input_data}`}
          />
          <label htmlFor="emailInp" className={css.dataLabel}>
            E-mail
          </label>
          <input
            type="text"
            placeholder="david01@gmail.com"
            id="emailInp"
            className={`${css.modal_input} ${css.modal_input_data}`}
          />

          <div className={css.modal_password_inp}>
            <p className={css.modal_password_text}>Password</p>

            <div className={css.passwordInputContainer}>
              <label htmlFor="outdatedPas" className={css.password_label}>
                Outdated password:
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={outdatedPassword}
                onChange={e => setOutdatedPassword(e.target.value)}
                placeholder="Password"
                id="outdatedPas"
                // ref={inputRefs.outdatedPas}
                className={`${css.modal_input} ${css.modal_input_password}`}
              />
              <div
                className={css.togglePasswordIcon}
                onClick={() => {
                  handleTogglePassword();
                }}
              >
                <EyeIcon />
              </div>
            </div>

            <div className={css.passwordInputContainer}>
              <label htmlFor="newPas" className={css.password_label}>
                New Password:
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Password"
                id="newPas"
                // ref={inputRefs.newPas}
                className={`${css.modal_input} ${css.modal_input_password}`}
              />
              <div
                className={css.togglePasswordIcon}
                onClick={() => {
                  handleTogglePassword();
                }}
              >
                <EyeIcon />
              </div>
            </div>
            <div className={css.passwordInputContainer}>
              <label htmlFor="repeatPas" className={css.password_label}>
                Repeat new password:
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={repeatPassword}
                onChange={e => setRepeatPassword(e.target.value)}
                placeholder="Password"
                id="repeatPas"
                // ref={inputRefs.repeatPas}
                className={`${css.modal_input} ${css.modal_input_password}`}
              />
              <div
                className={css.togglePasswordIcon}
                onClick={() => {
                  handleTogglePassword();
                }}
              >
                <EyeIcon />
              </div>
            </div>
          </div>
          <button type="submit" className={css.modal_form_submit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsModal;
