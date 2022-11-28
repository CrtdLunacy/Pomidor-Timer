import React from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import PomodoroBlock from './PomodoroBlock/PomodoroBlock';
import styles from './statisform.module.css'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, ResponsiveContainer} from 'recharts'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addNewWeekDay, changeDate } from '../../store/store';


const StatisForm = () => {
  const dataWeek = useSelector(state => state.days);
  const dateStore = useSelector(state => state.date);
  const weekState = useSelector(state => state.weekSort.value);
  const dateNow = new Date();
  const lateDate = new Date(Number(dateStore));
  const diffDays = Math.floor((dateNow - lateDate)/(60*60*24*1000));
  const dispatch = useDispatch();
  console.log(dateNow, diffDays);
  let data;

  const updateWeek = (count) => {
    dispatch(changeDate(String(dateNow.getTime())));
    for(let i = 0; i < count; i++) {
      dispatch(addNewWeekDay(dataWeek));
    }
  }

  const formatXAxis = (tickItem) => {
    if(tickItem >= 0 && tickItem < 60) return `${tickItem} минут`;
    if(tickItem >= 60 && tickItem < 120 ) return `${Math.floor(tickItem / 60)} час ${tickItem % 60} минут`;
    if(tickItem >= 120 && tickItem < 300) return `${Math.floor(tickItem / 60)} часа ${tickItem % 60} минут`;
    if(tickItem >= 300) return `${Math.floor(tickItem / 60)} часов ${tickItem % 60} минут`;
  }

  if (weekState === 'Эта неделя') {data = dataWeek.slice(14, );}
  if (weekState === 'Прошедшая неделя') {data = dataWeek.slice(7,14);}
  if (weekState === '2 недели назад') {data = dataWeek.slice(0,7);}

  useEffect(() => {
   if(diffDays > 0) updateWeek(diffDays);
   // eslint-disable-next-line
  }, [dateStore, dateNow]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper__info}>
        <PomodoroBlock day={data[data.length - 1].fullweekday} time={data[data.length - 1].time} />
        <ResponsiveContainer width='90%' height={500}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 0" vertical={false} />
            <XAxis axisLine={false} dataKey="weekday"/>
            <YAxis axisLine={false} orientation="right" width={150} tickFormatter={formatXAxis} />
            <Bar cursor='pointer' label={false} dataKey='time' stackId="a" fill="var(--red)" />
            <Bar cursor='pointer' label={false} dataKey='pauseTime' stackId="a" fill="var(--red)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <InfoBlock data={data} />
    </div>
  );
};

export default StatisForm;
