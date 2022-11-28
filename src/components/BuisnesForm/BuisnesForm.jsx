import React, { useRef, useState } from 'react';
import MyButton from '../UI/MyButton';
import styles from './buisnesform.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addDeal, switchDeals } from '../../store/store';
import { nanoid } from 'nanoid';
import BuisnesItem from './BuisnesItem/BuisnesItem';
import BuisnessTime from './BuisnessTime/BuisnessTime';

const BuisnesForm = () => {
  const [value, setValue] = useState('');
  const [range, setRange] = useState(25);
  const [errorValue, setErrorValue] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const dealList = useSelector(state => state.deals);
  const dealTime = dealList.reduce((prev, curr) => prev + curr.time*curr.count, 0);

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
   (errorValue) && setErrorValue(false);
  }

  const handleRange = (e) => {
    setRange(e.target.value);
  }

  const handleSubmit = () => {
    if (!value) return setErrorValue(true);
    dispatch(addDeal({text: value, time: Number(range)}));
    inputRef.current.value = '';
  }

  const handleFirstDeal = (index) => {
    if (index === 0) return;
    dispatch(switchDeals(index));
  }

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.buisnessName}
        type="text"
        name="buisnessName"
        id="buisnessName"
        placeholder='Название дела'
        onChange={handleChange}
      />
      <p>Сколько времени займет задача?</p>
      <input className={styles.buisnessRange} type="range" onChange={handleRange} min='5' max='300' defaultValue='25' />
      <div className={styles.timeRange}>{range} минут</div>
      {errorValue && (<div style={{color: 'red', marginBottom: '20px'}}>Нельзя добавить дело без названия!</div>)}
      <MyButton
        color={'var(--white)'}
        padding={'20px 50px'}
        bgcolor={'var(--green)'}
        mWidth={'175px'}
        onClick={handleSubmit}
        type={'submit'}
      >Добавить</MyButton>
      <ul>
        {dealList.length > 0 && (
          dealList.map((deal, index) =>
            <BuisnesItem key={nanoid()} text={deal.text} index={index} count={deal.count} onClick={handleFirstDeal} />
          )
        )}
      </ul>
      <BuisnessTime time={dealTime} />
    </div>
  );
};

export default BuisnesForm;
