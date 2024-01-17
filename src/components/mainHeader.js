import React from 'react';

const handleMouseEnter = (event) => {
  document.querySelectorAll('.mainMenu > li').forEach(function(item){
    item.style.color = '#fff';
  });
  event.target.style.color = '#E0D994';
};

function HEADWARPER(props) {
  return (
    <div className='headWarper'>
      <div></div>
      <div className='headMenuWarp'>
        <div className='headTitle'>
          에오르제아 탐정 사무소
        </div>
        <div className='headBox1'></div>
        <ul className='mainMenu'>
          <li onMouseOver={handleMouseEnter} onClick={()=>props.setHeadValue(1)} className='menuMainPage'>메인화면</li>
          <li onMouseOver={handleMouseEnter} onClick={()=>props.setHeadValue(2)} className='menuInfomation'>이용안내</li>
          <li onMouseOver={handleMouseEnter} onClick={()=>props.setHeadValue(3)} className='menuContact'>의뢰 & 해결내역</li>
          <li onMouseOver={handleMouseEnter} onClick={()=>props.setHeadValue(4)} className='menuReview'>리뷰</li>
        </ul>
      </div>
    </div>
  );
}

export default HEADWARPER;