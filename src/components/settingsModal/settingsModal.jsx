import React from 'react';
import css from './settingsModal.module.css';
import img from './ars.png';
import { ReactComponent as UploadIcon } from './icons/outline.svg';

import Backdrop from 'components/Backdrop/Backdrop';

import { useDispatch, useSelector } from 'react-redux';
import ModalForm from './ModalForm';
import { updateAvatarThunk } from 'redux/auth/auth-operations';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const avatar = useSelector(state => state.auth.user.avatarURL);
  console.log(avatar);
  // const [outdatedPassword, setOutdatedPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [repeatPassword, setRepeatPassword] = useState('');

  const handleFileChange = event => {
    const file = event.target.files[0];

    const formData = new FormData();

    formData.append('avatarURL', file);

    dispatch(updateAvatarThunk(formData));
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(e.currentTarget);
  // };

  return (
    <Backdrop>
      <div className={css.modal}>
        <div className={css.settings_flex_container}>
          <b className={css.modal_setting}>Setting</b>
        </div>

        <p className={css.modal_photo_text}>Your Photo</p>
        <ul className={css.modal_photo_list}>
          <li className={css.modal_list_photo}>
            {avatar ? (
              <div className={css.photo_div}>
                <img src={avatar} className={css.image_modal} alt="" />
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
              accept="image/jpeg,image/png,image/jpg"
              onChange={handleFileChange}
            />
          </li>
        </ul>
        <ModalForm />
      </div>
    </Backdrop>
  );
};

export default SettingsModal;
