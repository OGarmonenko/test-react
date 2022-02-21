import React from 'react';
import CustomButton from "../custom/CustomButton";

const ListItem = (props) => {
  return (
    <li>
      <div style={{display: 'flex', height: '25px', paddingRight:10}}>
      <div>{props.record.item}  {props.record.date}</div>
        <CustomButton onClick={()=> props.removeRecord(props.record)}>Delete</CustomButton>
      </div>
    </li>
  );
};

export default ListItem;