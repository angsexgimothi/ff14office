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
  let [toggleAni,setToggleAni] = useState(false);
  let [controlAni,setControlAni] = useState(0);
  // useEffect(()=>{
  // console.log(value);
  
  // },[value]);
  // useEffect(()=>{
  //   console.log(headValue);
  // },[headValue]);
  useEffect(()=>{
    console.log(controlAni);
  },[controlAni]);
  useEffect(()=>{
    console.log(toggleAni);
  },[toggleAni])
  return (
    <div className="App">
      <div className='mainWarper'>
        {toggleAni || controlAni === 0 ?  <></> : <ANIMATION/>}
        {toggleAni ? <ANIMATION/> : <></>}
        {value === 0? <HEADWARPER setHeadValue={setHeadValue}/> :<></>}
        {value === 0 && headValue === 1 ? <MAINBODY 
        setValue={setValue} 
        toggleAni = {toggleAni} setToggleAni = {setToggleAni}
        /> :<></> }
        {headValue ===2 ? <INFORMATION/> : <></>}
      </div>
      {value === 0? <FOOTER /> : <></>}
      {value === 0? <></> : <CHARACTERINFO 
      value = {value} setValue={setValue} 
      toggleAni = {toggleAni} setToggleAni = {setToggleAni}
      controlAni = {controlAni} setControlAni = {setControlAni}
      />}
    </div>

  );
};

export default App;
