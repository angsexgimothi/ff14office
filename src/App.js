import './App.css';
import React, { useEffect,useState} from 'react';
import HEADWARPER from './components/mainHeader.js';
import MAINBODY from './components/mainBody.js';
import FOOTER from './components/mainFooter.js';
import CHARACTERINFO from './components/charInfo.js';
import INFORMATION from './components/Information.js';


const App = () => {
  let [value,setValue] = useState(0);
  let [headValue,setHeadValue] = useState(1);
  useEffect(()=>{
  console.log(value);
  },[value]);
  useEffect(()=>{
    console.log(headValue);
  },[headValue]);

  return (
    <div className="App">
      <div className='mainWarper'>
        {value === 0? <HEADWARPER setHeadValue={setHeadValue}/> :<></>}
        {value === 0 && headValue === 1 ? <MAINBODY setValue={setValue}/> :<></> }
        {headValue ===2 ? <INFORMATION/> : <></>}
      </div>
      {value === 0? <FOOTER /> : <></>}
      {value === 0? <></> : <CHARACTERINFO value = {value} setValue={setValue}/>}
    </div>

  );
};

export default App;
