import './App.css';
import React, { useEffect,useState} from 'react';
import HEADWARPER from './components/mainHeader.js';
import MAINBODY from './components/mainBody.js';
import FOOTER from './components/mainFooter.js';
import CHARACTERINFO from './components/charInfo.js';


const App = () => {
  let [value,setValue] = useState(0);
  useEffect(()=>{
  console.log(value);
  },[value]);

  return (
    <div className="App">
      <div className='mainWarper'>
        {value === 0? <HEADWARPER /> :<></>}
        {value === 0? <MAINBODY setValue={setValue}/> :<></> }
      </div>
      {value === 0? <FOOTER /> : <></>}
      {value === 0? <></> : <CHARACTERINFO value = {value} setValue={setValue}/>}
    </div>

  );
};

export default App;
