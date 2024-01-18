import './App.css';
import React, { useEffect,useState} from 'react';
import HEADWARPER from './components/mainHeader.js';
import MAINBODY from './components/mainBody.js';
import FOOTER from './components/mainFooter.js';
import CHARACTERINFO from './components/charInfo.js';
import INFORMATION from './components/Information.js';
import ANIMATION from './components/animation.js';

const App = () => {
  let [value,setValue] = useState(0);
  let [headValue,setHeadValue] = useState(1);
  const [anim, setAnim] = useState(false);
  // useEffect(()=>{
  // console.log(value);
  
  // },[value]);
  // useEffect(()=>{
  //   console.log(headValue);
  // },[headValue]);

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
        {headValue ===2 ? <INFORMATION/> : <></>}
      </div>
      {value === 0? <FOOTER /> : <></>}
      {value === 0? <></> : <CHARACTERINFO 
      value = {value} setValue={setValue} 
      setAnim={setAnim}
      anim = {anim}
      // toggleAni = {toggleAni} setToggleAni = {setToggleAni}
      // controlAni = {controlAni} setControlAni = {setControlAni}
      // toggleAni2 = {toggleAni2} setToggleAni2 = {setToggleAni2}
      />}
    </div>

  );
};

export default App;
