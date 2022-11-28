import React from 'react';
import styles from './infoitem.module.css'

const InfoItem = ({ name, data, children, bgcolor }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bgcolor }}>
      <div className={styles.infotext}>
        <p className={styles.infotitle}>{name}</p>
        {name === 'Фокус' && (<div className={styles.infodata}>{data}%</div>)}
        {name === 'Время на паузе' && (<div className={styles.infodata}>{data}м</div>)}
        {name === 'Остановки' && (<div className={styles.infodata}>{data}</div>)}
      </div>
      {children}
    </div>
  );
};

export default InfoItem;
