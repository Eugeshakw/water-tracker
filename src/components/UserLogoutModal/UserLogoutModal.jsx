import React from 'react';
import {
  LogoutModal,
  HeadingOfLogOutModal,
  DivOfHeadingOfLogOutModal,
  BtnOfCloseOfLogOutModal,
  ParagraphOfExit,
  BtnOfExit,
  BtnOfCancelModalLogOut,
  DivOfBtns,
} from './UserLogoutModalStyle';
import { useModal } from 'context/modalContext';
import { useNavigate } from 'react-router-dom';

const UserLogoutModal = () => {
  const { closeModal } = useModal();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Удаление токена из локального хранилища
    localStorage.removeItem('token'); // Замените 'your_token_key' на ваш ключ токена
    // Дополнительно, вы можете выполнить другие действия, связанные с выходом пользователя

    // Перенаправление пользователя на страницу входа или другую страницу
    navigate('/signin'); // Замените '/login' на путь к вашей странице входа
    closeModal();
  };

  return (
    <LogoutModal>
      <DivOfHeadingOfLogOutModal>
        <HeadingOfLogOutModal>Log out</HeadingOfLogOutModal>
        <BtnOfCloseOfLogOutModal onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#407BFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BtnOfCloseOfLogOutModal>
      </DivOfHeadingOfLogOutModal>
      <ParagraphOfExit>Do you really want to leave?</ParagraphOfExit>
      <DivOfBtns>
        <BtnOfExit onClick={handleLogout}>Log out</BtnOfExit>
        <BtnOfCancelModalLogOut onClick={closeModal}>
          Cancel
        </BtnOfCancelModalLogOut>
      </DivOfBtns>
    </LogoutModal>
  );
};

export default UserLogoutModal;
