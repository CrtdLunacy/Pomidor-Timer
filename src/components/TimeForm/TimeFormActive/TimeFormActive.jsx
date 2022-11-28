import React from 'react';
import MyButton from '../../UI/MyButton';
import styles from '../timeform.module.css'

const TimeFormActive = (props) => {
  const {
    dealName,
    handleTime,
    handlePause,
    handleStop,
    handleDone,
    minutes,
    seconds,
    pause
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header} style={{backgroundColor: 'var(--red)'}}>
        <p className={styles.title}>{dealName ? dealName : 'Новая задача'}</p>
        <p>Помидор 1</p>
      </div>

      <div className={styles.timer}>
        <div style={pause ? {color: '#333'} : {color: 'var(--red)'}}>{`${minutes}:${seconds}`}</div>
        <MyButton
          onClick={handleTime}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="#C4C4C4"/>
            <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white"/>
          </svg>
        </MyButton>
      </div>
      <p>Задача 1 - {dealName ? dealName : 'Новая задача'}</p>
      <div className={styles.buttonsWrap}>
          <MyButton
          bgcolor={pause ? 'var(--green)' : 'var(--greenDark)'}
          padding={'19px 50px'}
          color={'var(--white)'}
          onClick={handlePause}
          >{pause ? 'Продолжить' : 'Пауза'}</MyButton>

          <MyButton
          border={pause ? 'none' : '2px solid var(--red)'}
          bgcolor={pause ? 'var(--red)' : 'transparent'}
          padding={'19px 50px'}
          color={pause ? 'var(--white)' : 'var(--red)'}
          onClick={pause ? handleDone : handleStop}
          >{pause ? 'Сделано' : 'Стоп'}</MyButton>
      </div>

    </div>
  );
};

export default TimeFormActive;
