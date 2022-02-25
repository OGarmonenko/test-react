import React from 'react';
import CustomButton from '../custom/button/CustomButton';
import styles from './ListItem.module.css';
import * as moment from 'moment';

const ListItem = (props) => {
  return (
    <li className={ styles.wrapperLi }>
      <div className={ styles.wrapperRecord }>
        <p className={ styles.textRecord }>{ props.record.item }</p>
        <p>{ moment(props.record.date).format('DD/MM/YYYY - h:mm:ss') }</p>
        <CustomButton onClick={()=> props.removeRecord(props.record)}>Delete</CustomButton>
      </div>
    </li>
  );
};

export default ListItem;