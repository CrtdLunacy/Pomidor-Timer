import React from 'react';
import BuisnesForm from '../components/BuisnesForm/BuisnesForm';
import Instruction from '../components/Instruction/Instruction';
import TimeForm from '../components/TimeForm/TimeForm';
import styles from './pages.module.css'

const Home = () => {
  return (
    <div className={styles.container__home}>
      <div className={styles.home_left}>
        <Instruction />
        <BuisnesForm />
      </div>
      <div className={styles.home_right}>
        <TimeForm />
      </div>
    </div>
  );
};

export default Home;
