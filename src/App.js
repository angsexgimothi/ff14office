import './App.css';
import React, {useState} from 'react';
import HEADWARPER from './components/mainHeader.js';
import MAINBODY from './components/mainBody.js';
import FOOTER from './components/mainFooter.js';
import CHARACTERINFO from './components/charInfo.js';
import INFORMATION from './components/Information.js';
import ANIMATION from './components/animation.js';
import CONTACT from './components/contact.js';

const App = () => {
  let [value,setValue] = useState(0);
  let [headValue,setHeadValue] = useState(1);
  const [anim, setAnim] = useState(false);

  return (
    <div className="App">
      <div className='mainWarper'>
        {anim ? <ANIMATION setAnim={setAnim}/> : <></>}
        
        {value === 0? <HEADWARPER setHeadValue={setHeadValue}/> :<></>}
        {value === 0 && headValue === 1 ? <MAINBODY 
        anim = {anim}
        setValue={setValue} 
        setAnim = {setAnim}
        /> :<></> }
        {headValue === 2 ? <INFORMATION/> : <></>}
        {headValue === 3 ? <CONTACT/> : <></>}
      </div>
      {value === 0? <FOOTER /> : <></>}
      {value === 0? <></> : <CHARACTERINFO 
      value = {value} setValue={setValue} 
      setAnim={setAnim}
      anim = {anim}
      />}
    </div>

  );
};

export default App;
