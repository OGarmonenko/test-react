import './App.css';
import Header from './components/common/header/Header';
import Content from './components/toMainPage/Content';
import React, {useState} from "react";

function App() {
  const [records, setRecords] = useState([]);


  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const removeRecord = (record) => {
    setRecords(records.filter(r => r.id !== record.id));
  };

  return (
    <div>
      <Header addRecord={addRecord}/>
      <Content records={records} title={"Current records:"} removeRecord={removeRecord}/>
    </div>
  );
}

export default App;
