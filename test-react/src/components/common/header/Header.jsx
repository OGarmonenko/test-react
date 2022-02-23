import React, {useEffect, useState} from 'react';
import CustomButton from "../../custom/button/CustomButton";
import CustomInput from "../../custom/input/CustomInput";
import * as moment from 'moment'
import styles from './Header.module.css'

const Header = (props) => {
  const [record, setRecord] = useState('');


  const handleClickAdd = (e) => {
    e.preventDefault();
    const newRecord = {
      id: Date.now(),
      item: record,
      date: moment(Date.now()).format('DD/MM/YYYY - h:mm:ss'),
    }
    props.addRecord(newRecord);
    setRecord('');
  }

  return (
    <form className={ styles.wrapperHeader } >
      <CustomInput type={ "text" } placeholder={ "Enter record..." } value={ record } onChange={e => setRecord(e.target.value)}/>
      <CustomButton disabled={ !record.length } onClick={e => handleClickAdd(e)}> Add </CustomButton>
    </form>
  );
};

export default Header;