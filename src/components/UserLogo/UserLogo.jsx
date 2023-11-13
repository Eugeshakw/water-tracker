import React from 'react';
import styles from './UserLogo.module.css';

const UserLogo = () => {
  return (
    <div className={styles.userLogo}>
      <h3 className={styles.name}>UserNam</h3>
      <img
        className={styles.avatar}
        src="https://trello-members.s3.amazonaws.com/63ee1379a0122cf60acbadf8/9cf5e1c5c18cdf0fb573732112c72bc7/30.png"
        alt=""
      />
      <button className={styles.modal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.35356 10.8533C8.25981 10.947 8.13272 10.9996 8.00022 10.9996C7.86772 10.9996 7.74064 10.947 7.64689 10.8533L2.64689 5.85332C2.55857 5.75854 2.51049 5.63318 2.51277 5.50364C2.51506 5.37411 2.56753 5.25052 2.65914 5.15891C2.75075 5.0673 2.87434 5.01483 3.00387 5.01254C3.13341 5.01025 3.25877 5.05834 3.35356 5.14666L8.00022 9.79332L12.6469 5.14666C12.6927 5.09753 12.7479 5.05813 12.8092 5.0308C12.8705 5.00347 12.9367 4.98878 13.0039 4.9876C13.071 4.98641 13.1377 4.99876 13.2 5.02391C13.2622 5.04906 13.3188 5.08649 13.3662 5.13396C13.4137 5.18144 13.4512 5.238 13.4763 5.30026C13.5015 5.36252 13.5138 5.4292 13.5126 5.49634C13.5114 5.56347 13.4967 5.62968 13.4694 5.69102C13.4421 5.75235 13.4027 5.80755 13.3536 5.85332L8.35356 10.8533Z"
            fill="#407BFF"
          />
        </svg>
      </button>
    </div>
  );
};

export default UserLogo;