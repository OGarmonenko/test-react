import React from 'react';
import CustomButton from "../custom/button/CustomButton";
import styles from './ListItem.module.css'

const ListItem = (props) => {
  return (
    <li className={ styles.wrapperLi }>
      <div className={ styles.wrapperRecord }>
        <div>
        <p className={ styles.textRecord }>{ props.record.item }</p>
        <p  className={ styles.dateRecord }>{ props.record.date }</p>
        </div>
        <CustomButton onClick={()=> props.removeRecord(props.record)}>Delete</CustomButton>
      </div>
    </li>
  );
};

export default ListItem;