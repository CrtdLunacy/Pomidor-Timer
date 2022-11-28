import React, { useEffect, useState } from 'react';
import { getPadTime } from '../../helpers/getPadTime';
import { useDispatch, useSelector } from 'react-redux';
import { removeDeal, addTime, addPauseTime, addPauseCount, addDoneDeal, downtimeDeal } from '../../store/store';
import sound from '../../audio/aplodismentyi-nebolshoy-gruppyi-lyudey-s-radostnyimi-krikami.mp3';
import TimeFormStop from './TimeFormStop/TimeFormStop';
import TimeFormActive from './TimeFormActive/TimeFormActive';
import TimeFormPauseActive from './TimeFormPauseActive/TimeFormPauseActive';

const TimeForm = () => {
  const dealList = useSelector(state => state.deals);
  const [timeLeft, setTimeLeft] = useState(dealList.length ? dealList[0].time * 60 : 25 * 60);
  const [pauseLeft, setPauseLeft] =  useState(5 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [pauseBreak, setPauseBreak] = useState(false);
  const countDoneDeals = useSelector(state => state.countDoneDeals);
  const dispatch = useDispatch();
  const audio = new Audio(sound);

  const minutes = timeLeft <=0 ?  getPadTime(Math.floor(pauseLeft / 60)) : getPadTime(Math.floor(timeLeft / 60));
  const seconds = timeLeft <=0 ? getPadTime(pauseLeft - minutes * 60) : getPadTime(timeLeft - minutes * 60);

  const handleDelete = () => {
    dispatch(addDoneDeal(1));
    (dealList[0].count <= 1) && dispatch(removeDeal(0));
    (dealList[0].count > 1) && dispatch(downtimeDeal(0));
    dispatch(addTime(dealList[0].time));
    (countDoneDeals % 3 === 0 && countDoneDeals > 0) && setPauseLeft(20*60);
    setPauseBreak(true);

    audio.play();
  }

  const handleStart = () => {
    setIsCounting(true);
    setIsPause(false);
  };

  const handlePause = () => {
    setIsPause(!isPause);
    !isPause && dispatch(addPauseCount(1));
  };

  const handleStop = () => {
    setIsCounting(false);
    dealList.length ? setTimeLeft(dealList[0].time * 60) : setTimeLeft(25 * 60);
    dispatch(removeDeal(0));
  };

  const handleDone = () => {
    setIsCounting(false);
    setIsPause(false);
    dealList.length ? setTimeLeft(dealList[0].time * 60) : setTimeLeft(25 * 60);
    dispatch(removeDeal(0));
    dispatch(addTime(dealList[0].time));
  }

  const handlePauseEnd = (bool = true) => {
    dealList.length ? setTimeLeft(dealList[0].time * 60) : setTimeLeft(25 * 60);
    setPauseLeft(5 * 60);
    bool && (countDoneDeals % 3 !== 0) && dispatch(addPauseTime(5));
    bool && (countDoneDeals % 3 === 0) && dispatch(addPauseTime(20));
    setPauseBreak(false);
    setIsCounting(false);
    setIsPause(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && !isPause && setTimeLeft((timeLeft) => (timeLeft >= 1) ? timeLeft - 1 : 0)
      isCounting && timeLeft <=0 && !isPause && setPauseLeft((pauseLeft) => (pauseLeft >= 1) ? pauseLeft - 1 : 0)
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [isCounting, timeLeft, isPause]);

  useEffect(() => {
    if(timeLeft === 0 && !pauseBreak) {
      handleDelete();
    }
    if(pauseLeft === 0) {
      handlePauseEnd()
    }
    // eslint-disable-next-line
  }, [timeLeft, pauseLeft])

  useEffect(() => {
    if (dealList.length) setTimeLeft(dealList[0].time * 60);
  }, [dealList])


  const handleTime = () => {setTimeLeft(prev => prev + (25 * 60))};

  return (
      <>
      {!isCounting && !isPause &&
        <TimeFormStop
          handleStart={handleStart}
          minutes={minutes}
          seconds={seconds}
          dealName={dealList.length && dealList[0].text}
          handleTime={handleTime}
          disabled={dealList.length ? false : true}
        />
      }

      {isCounting && timeLeft > 0 &&
        <TimeFormActive
          handlePause={handlePause}
          handleStop={handleStop}
          handleDone={handleDone}
          pause={isPause}
          minutes={minutes}
          seconds={seconds}
          dealName={dealList.length && dealList[0].text}
          handleTime={handleTime}
        />
      }

      {
        timeLeft <=0 &&
          <TimeFormPauseActive
            handlePause={handlePause}
            handleSkip={handlePauseEnd}
            pause={isPause}
            minutes={minutes}
            seconds={seconds}
            dealName={dealList.length && dealList[0].text}
            handleTime={handleTime}
          />
      }
      </>
  );
};

export default TimeForm;
