import React from 'react';

const handleMouseEnter = (event) => {
  document.querySelectorAll('.mainMenu > li').forEach(function(item){
    item.style.color = '#fff';
  });
  event.target.style.color = '#E0D994';
};

function HEADWARPER() {
  return (
    <div className='headWarper'>
      <div></div>
      <div className='headMenuWarp'>
        <div className='headTitle'>
          에오르제아 탐정 사무소
        </div>
        <div className='headBox1'></div>
        <ul className='mainMenu'>
          <li onMouseOver={handleMouseEnter} className='menuMainPage'>메인화면</li>
          <li onMouseOver={handleMouseEnter} className='menuInfomation'>이용안내</li>
          <li onMouseOver={handleMouseEnter} className='menuContact'>의뢰 & 해결내역</li>
          <li onMouseOver={handleMouseEnter} className='menuReview'>리뷰</li>
        </ul>
      </div>
    </div>
  );
}

export default HEADWARPER;