import React from 'react';
import {
  LogoutModal,
  LogoutBtn,
  CancellBtn,
  CloseBtn,
} from './UserLogoutModalStyle';

const UserLogoutModal = () => {
  return (
    <LogoutModal>
      <h3>Log out</h3>
      <p>Do you really want to leave?</p>
      <ul>
        <li>
          <LogoutBtn>Log out</LogoutBtn>
        </li>
        <li>
          <CancellBtn>Cancel</CancellBtn>
        </li>
      </ul>
      <CloseBtn>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 13L13 1M1 1L13 13"
            stroke="#407BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </CloseBtn>
    </LogoutModal>
  );
};

export default UserLogoutModal;
