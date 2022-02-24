import React from 'react';
import CustomButton from '../custom/button/CustomButton';
import styles from './ListItem.module.css';
//import * as moment from 'moment';

const ListItem = (props) => {
  return (
    <li className={ styles.wrapperLi }>
      <div className={ styles.wrapperRecord }>
        <div className={ styles.partRecord }>
          <div className={ styles.textRecord }>{ props.record.item }
            <span className={ styles.tooltiptext}>{ props.record.item } 'ggg'</span>
          </div>
        </div>
        <div className={ styles.partRecord }>
          <span /*className={ styles.dateRecord }*/>{ props.record.date/*()=> moment(props.record.date).format('DD/MM/YYYY - h:mm:ss') */}</span>
        </div>
        <div className={ styles.partRecord }>
          <CustomButton onClick={ ()=> props.removeRecord(props.record) }>Delete</CustomButton>
        </div>
      </div>
    </li>
  );
};

export default ListItem;