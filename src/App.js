
import './App.css';
import React,{ useState } from 'react';
import Input from './Components/Input';
import Task from './Components/Task';


function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container" style={{width : '800px'}}>
      {list.map((task, i) =>(
       <Task task={task} setList={setList} index={i} list={list}/> 
      ))}
      <Input list={list} setList={setList} />
    </div>
  );
}

export default App;
