import React from 'react';
import styles from './UserLogout.module.css';

const UserLogoutModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h3 className={styles.title}>Log out</h3>
        <p className={styles.text}>Do you really want to leave?</p>
        <ul className={styles.options}>
          <li>
            <button className={styles.logOut}>Log out</button>
          </li>
          <li>
            <button className={styles.cancel}>Cancel</button>
          </li>
        </ul>
        <button className={styles.close}>
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserLogoutModal;
