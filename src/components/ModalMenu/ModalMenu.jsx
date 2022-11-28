import React from 'react';
import AddIcon from '../Icons/AddIcon';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import MinusIcon from '../Icons/MinusIcon';
import styles from './modalmenu.module.css';

const ModalMenu = ({ isOpen, isEdit, isUp, isDown, isDelete }) => {

  return (
   <div >
    {isOpen && (
      <ul className={styles.container}>
        <li onClick={isUp}>
          <AddIcon />
          <p>Увеличить</p>
        </li>
        <li onClick={isDown}>
          <MinusIcon />
          <p>Уменьшить</p>
        </li>
        <li onClick={isEdit}>
          <EditIcon />
          <p>Редактировать</p>
        </li>
        <li onClick={isDelete}>
          <DeleteIcon />
          <p>Удалить</p>
        </li>
      </ul>
     )}
    </div>
  );
};

export default ModalMenu;
