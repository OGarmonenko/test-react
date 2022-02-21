import './App.css';
import Header from './components/header/Header';
import List from "./components/content/List";

import {useEffect, useRef, useState} from "react";

function App() {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([...records, record])
  }

  const removeRecord = (record) => {
    setRecords(records.filter(r => r.id !== record.id))
  }

  return (
    <div>

      <Header addRecord={addRecord}/>

      {!records.length
        ? <h3 style={{textAlign: "center"}}>Not records</h3>
        : <List records={records} title={"Current records:"} removeRecord={removeRecord}/>
      }
    </div>
  );
}

export default App;
