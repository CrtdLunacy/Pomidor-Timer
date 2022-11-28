import React from 'react';
import Logo from './Logo/Logo';
import Statystic from './Statystic/Statystic';
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Statystic />
    </div>
  );
};

export default Header;
