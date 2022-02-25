import React from 'react';
import List from './List';
import styles from  './Content.module.css';

const Content = (props) => {
  return (
    <div className={ styles.wrapperContent }>
      {!props.records.length
        ? <p className={ styles.textError }>Not records</p>
        : <List records={ props.records } title={ "Current records:" } removeRecord={ props.removeRecord }/>
      }
    </div>
  );
};

export default Content;