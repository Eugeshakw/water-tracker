import React from 'react';
import { LogoutModal, HeadingOfLogOutModal, DivOfHeadingOfLogOutModal, BtnOfCloseOfLogOutModal, ParagraphOfExit, BtnOfExit, BtnOfCancelModalLogOut, DivOfBtns } from './UserLogoutModalStyle';

const UserLogoutModal = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <LogoutModal>
      <DivOfHeadingOfLogOutModal>
        <HeadingOfLogOutModal>Log out</HeadingOfLogOutModal>
        <BtnOfCloseOfLogOutModal onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M6 6L18 18" stroke="#407BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </BtnOfCloseOfLogOutModal>
      </DivOfHeadingOfLogOutModal>
      <ParagraphOfExit>Do you really want to leave?</ParagraphOfExit>
      <DivOfBtns>
        <BtnOfExit>Log out</BtnOfExit>
        <BtnOfCancelModalLogOut onClick={handleClose}>Cancel</BtnOfCancelModalLogOut>
      </DivOfBtns>
    </LogoutModal>
  );
};

export default UserLogoutModal;
