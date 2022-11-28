import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { changeWeek } from '../../store/store';
import styles from './statisheader.module.css'

const options = [
  { value: 'Эта неделя', label: 'Эта неделя' },
  { value: 'Прошедшая неделя', label: 'Прошедшая неделя' },
  { value: '2 недели назад', label: '2 недели назад' }
];

const customStyles = {
  option: (provided) => ({
    ...provided,
    padding: 20,
    width: 550,
  }),
  singleValue: (provided) => ({
    ...provided,
    width: 250,
  }),
  valueContainer: (provided) => ({
    ...provided,
    width: 250,
  }),
}

const StatisHeader = () => {
  const value = useSelector(state => state.weekSort);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p>
        Ваша активность
      </p>

      <Select options={options} styles={customStyles} defaultValue={value} onChange={(choice) => dispatch(changeWeek(choice))} />
    </div>
  );
};

export default StatisHeader;
