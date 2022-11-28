import React from 'react';
import StatisForm from '../components/StatisForm/StatisForm';
import StatisHeader from '../components/StatisHeader/StatisHeader';
import styles from './pages.module.css'

const About = () => {
  return (
    <div className={styles.container__about}>
      <StatisHeader />
      <StatisForm />
    </div>
  );
};

export default About;
