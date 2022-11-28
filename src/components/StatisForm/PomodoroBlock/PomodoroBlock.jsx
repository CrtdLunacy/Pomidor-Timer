import React from 'react';
import PomodoroIcon from '../../Icons/PomodoroIcon';
import styles from './pomodoroblock.module.css'

const PomodoroBlock = ({ day, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.week}>
        <p className={styles.weekday}>{day}</p>
        {!time && (<p>Вы еще не работали сегодня.</p>)}
        {time > 0 && time < 60 && (<p>{`Вы работали над задачами в течение ${time} минут`}</p>)}
        {time >= 60 && time < 120 && (<p>{`Вы работали над задачами в течение ${Math.floor(time / 60)} час ${time % 60} минут`}</p>)}
        {time >= 120 && time < 300 && (<p>{`Вы работали над задачами в течение ${Math.floor(time / 60)} часа ${time % 60} минут`}</p>)}
        {time >= 300 && (<p>{`Вы работали над задачами в течение ${Math.floor(time / 60)} часов ${time % 60} минут`}</p>)}
      </div>
      <div className={styles.pomodors}>
        <span>
          <PomodoroIcon /> x {time / 25}
        </span>
        <div>
          <p>
          {time / 25} помидоров
          </p>
        </div>
      </div>
    </div>
  );
};

export default PomodoroBlock;
