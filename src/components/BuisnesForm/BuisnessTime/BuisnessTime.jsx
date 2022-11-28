import React from 'react';
import styles from './buisnesstime.module.css';

const BuisnessTime = ({time}) => {
  return (
    <div  className={styles.container}>
      {!time && (<div>Нет новых задач</div>)}
      {time > 0 && time < 60 && (<div>{`${time} минут`}</div>)}
      {time >= 60 && time < 120 && (<div>{`${Math.floor(time / 60)} час ${time % 60} минут`}</div>)}
      {time >= 120 && time < 300 && (<div>{`${Math.floor(time / 60)} часа ${time % 60} минут`}</div>)}
      {time >= 300 && (<div>{`${Math.floor(time / 60)} часов ${time % 60} минут`}</div>)}
    </div>
  );
};

export default BuisnessTime;
