import React, { useRef, useState } from 'react';
import ModalMenu from '../../ModalMenu/ModalMenu';
import styles from './buisnesitem.module.css';
import { useDispatch } from 'react-redux';
import { downtimeDeal, removeDeal, updateDeal, uptimeDeal } from '../../../store/store';

const BuisnesItem = ({ text, index, count, onClick }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [value, setValue] = useState(text);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  const handleInput = () => {
    inputRef.current.disabled = false;
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleDelete = () => {
    dispatch(removeDeal(index));
  }

  const handleUptime = () => {
    dispatch(uptimeDeal(index));
  }

  const handleDownTime = () => {
    dispatch(downtimeDeal(index));
  }

  const handleSubmit = () => {
    dispatch(updateDeal(index, inputRef.current.value));
    inputRef.current.disabled = true;
  }

  return (
    <li className={styles.item} draggable={true}>
      <span onClick={() => onClick(index)} className={styles.count}>{count}</span>
      <input ref={inputRef} value={value} disabled={true} onChange={handleChange} onBlur={handleSubmit} style={{backgroundColor: 'transparent', border: 'none'}} />
      <span onClick={handleModal} className={styles.menu}>
        <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
          <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
          <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
        </svg>
        <ModalMenu
          isOpen={isOpenModal}
          isEdit={handleInput}
          isUp={handleUptime}
          isDown={handleDownTime}
          isDelete={handleDelete}
        />
    </span>
  </li>
  );
};

export default BuisnesItem;
