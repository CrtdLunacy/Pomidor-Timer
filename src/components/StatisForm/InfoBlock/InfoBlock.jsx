import React from 'react';
import { useSelector } from 'react-redux';
import FocusIcon from '../../Icons/FocusIcon';
import PauseTimeIcon from '../../Icons/PauseTimeIcon';
import StopsIcon from '../../Icons/StopsIcon';
import styles from './infoblock.module.css';
import InfoItem from './InfoItem/InfoItem';

const InfoBlock = ({data}) => {
  const focus = 100 - Math.floor(data[data.length - 1].pauseTime / (data[data.length - 1].time + data[data.length - 1].pauseTime) * 100);
  const pause = data[data.length - 1].pauseTime;
  const breaks = useSelector(state => state.pauseCount);

  return (
    <div className={styles.container}>
      <InfoItem name={'Фокус'} data={(focus > 0) ? focus : 0} bgcolor={'#FFDDA9'}><FocusIcon /></InfoItem>
      <InfoItem name={'Время на паузе'} data={pause} bgcolor={'#DFDCFE'}><PauseTimeIcon /> </InfoItem>
      <InfoItem name={'Остановки'} data={breaks} bgcolor={'#C5F1FF'}><StopsIcon /></InfoItem>
    </div>
  );
};

export default InfoBlock;
