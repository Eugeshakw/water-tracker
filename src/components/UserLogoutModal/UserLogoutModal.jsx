import React from 'react';
import {
  LogoutModal,
  LogoutBtn,
  CancellBtn,
  CloseBtn,
} from './UserLogoutModalStyle';

const UserLogoutModal = ({ onClose }) => {
  return (
    <LogoutModal>
      <h3>Log out</h3>
      <p>Do you really want to leave?</p>
      <ul>
        <li>
          <LogoutBtn>Log out</LogoutBtn>
        </li>
        <li>
          <CancellBtn onClick={onClose}>Cancel</CancellBtn>
        </li>
      </ul>
      <CloseBtn onClick={onClose}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 13L13 1M1 1L13 13"
            stroke="#407BFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CloseBtn>
    </LogoutModal>
  );
};

export default UserLogoutModal;
