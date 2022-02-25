import React from 'react';
import styles from './List.module.css';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <div className={ styles.wrapperList }>
      <span className={ styles.titleList }>{ props.title }</span>
      <div className={ styles.wrapperListItem } >
      <ol className={styles.list}>
      {props.records.map((record) =>
        <ListItem record={ record } key={ record.id } removeRecord={ props.removeRecord }/>
      )}
      </ol>
      </div>
    </div>
  );
};

export default List;