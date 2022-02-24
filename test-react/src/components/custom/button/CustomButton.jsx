import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = (props) => {
  return (
    <button className={ styles.CButton } {...props}>
      { props.children }
    </button>
  );
};
export default CustomButton;