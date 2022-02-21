import React, {useEffect, useRef, useState} from 'react';
import styles from './List.module.css'
import CONSTANTS from "../constants/constants";
import ListItem from "./ListItem";


const List = (props) => {
  const [scroll, setScroll] = useState(false);
  const [delta1, setDelta1] = useState(0);
  const clientHeigth = document.documentElement.clientHeight;
  const [listHeigth, setListHeigth] = useState(0);
  const divObserv = useRef();

  useEffect(() => {
    handleScroll();
  }, [props.records.length]);


  const handleScroll = () => {
    const delta = clientHeigth - divObserv.current.offsetTop;
    setDelta1(delta);
    setListHeigth(divObserv.current.offsetTop)
    console.log('d', delta);
    (clientHeigth - divObserv.current.offsetTop) > 0 ? setScroll(false) : setScroll(true)
  }
  return (
    <div className={styles.wrapperList}>
      <p style={{textAlign: "center"}}>{props.title}</p>
      <div style = {scroll
        ? {height:document.documentElement.clientHeight-CONSTANTS.HEIGHT_HEADER, overflow: "auto"}
        : {height:listHeigth-CONSTANTS.HEIGHT_HEADER, overflow: "hidden"}}>
      <ol style={{margin:20}}>
      {props.records.map((record) =>
        <ListItem record={record} key={record.id} removeRecord={props.removeRecord}/>
      )}
        <div>
             <div ref={divObserv} style={{height:1}}></div>
        </div>
      </ol>
      </div>
    </div>
  );
};

export default List;