import React from 'react';
import { Link } from 'react-router-dom';
import styles from './statystic.module.css'

const Statystic = () => {
  return (
    <div className={styles.container}>
      <Link to='/about'>
        <svg className={styles.logo} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_7561_268)">
          <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22"/>
          </g>
          <defs>
          <clipPath id="clip0_7561_268">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <p className={styles.title}>Статистика</p>
      </Link>
    </div>
  );
};

export default Statystic;
