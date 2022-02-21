import React from 'react';
import styles from './CustomInput.module.css';

const CustomInput = (props) => {
  return (
    <input className={styles.CInput} {...props} />
  );
};

export default CustomInput;