
const MAINBODY = (props) => {    
    return(
      <div className='mainbodywarper'>
          <div className='bodyGrid'>
            <div></div>
            <div className='bodyGridSystem'>
              <div className='bodyImgWarp'>
              <img className='bodyBannerImg' alt='officeMainBanner' src='/images/character/mainbanner.png'></img>
                <div className='bodyBannerText'>
                  <div className='bodyBannerText2'>TROUBLESHOOTER</div>
                  <div className='bodyBannerText2'>TROUBLESHOOTER</div>
                  <div className='bodyBannerText1'>TROUBLESHOOTER</div>
                </div>
              </div>
              
              <div className='bodyBannerMassageWarp'>
                <div className='bodyBannerMassage1'>
                  고민과 무료함에 빠진 에오르제아인을 위한 사무소 입니다. 여러분의 한걸음 한걸음이 되어드리겠습니다.
                  <br></br>고민상담부터 돌발임무 및 던전 도우미, 하우징등 다양한 의뢰들을 손이 닿는대로 도와드립니다. 
                </div>
                <div className='bodyBannerMassage2'>
                  펜리르 시로가네 1구 38번지
                </div>
              </div>
              <div className='bodyCharacterBannerWarper'>
                <div className='bodyCharacterBannerTitle'>
                  직원 소개
                </div>  
                
                <div className='bodyCharacterBannerGrid'>
                  <div className='bodyCharacterBanner1 characterBanners'>
                    <img src='/images/character/unya(s).png' onClick={()=>{
                      if(props.anim) return;
                      setTimeout(()=>{props.setValue(1)}, 0.7*1000)
                      props.setAnim(true);
                    }}  alt='unya' ></img>
                    <div className='characterFontWarper'>  
                      <div className='unyaFont1'>우냐</div>
                      <div className='unyaFont2'>우냐</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner2 characterBanners'>
                    <img  src='/images/character/tigim(s).png' onClick={()=>{
                      if(props.anim) return;
                      setTimeout(()=>{props.setValue(2)}, 0.7*1000)
                      props.setAnim(true);
                    }}   alt='tigim'></img>
                    <div className='characterFontWarper'>  
                      <div className='tigimFont1'>티김</div>
                      <div className='tigimFont2'>티김</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner3 characterBanners'>
                    <img  src='/images/character/sweat(s).png' onClick={()=>{
                      if(props.anim) return;
                      setTimeout(()=>{props.setValue(3)}, 0.7*1000)
                      props.setAnim(true);
                    }}   alt='sweat'></img>
                    <div className='characterFontWarper'>  
                      <div className='sweatFont1'>농쭉이</div>
                      <div className='sweatFont2'>달콤새콤</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner4 characterBanners'>
                    <img src='/images/character/bambi(s).png'onClick={()=>{
                      if(props.anim) return;
                      setTimeout(()=>{props.setValue(4)}, 0.7*1000)
                      props.setAnim(true);
                    }}   alt='bambi'></img>
                    <div className='characterFontWarper'>  
                      <div className='bambi1'>김밤비</div>
                      <div className='bambi2'>김밤비</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner5 characterBanners'>
                    <img src='/images/character/kaldae(s).png' onClick={()=>{
                      if(props.anim) return;
                      setTimeout(()=>{props.setValue(5)}, 0.7*1000)
                      props.setAnim(true);
                    }}   alt='kaldae'></img>
                    <div className='characterFontWarper'>  
                      <div className='kaldae1'>칼데하데</div>
                      <div className='kaldae2'>칼데하데</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner6 characterBanners'>
                    <img src='/images/character/turtle(s).png' onClick={()=>{
                      if(props.anim) return;
                      setTimeout(()=>{props.setValue(6)}, 0.7*1000)
                      props.setAnim(true);
                    }}  alt='turtle'></img>
                    <div className='characterFontWarper'>  
                      <div className='turtle1'>거북바위솔</div>
                      <div className='turtle2'>거북바위솔</div>
                    </div>
                  </div>
                </div>

              </div>
              <div className='houseImgWarp'>
                <div className='houseImgTitle'>
                  내부 사진
                </div>
                <div className='HouseImg1'>
                  <img src='/images/building/office_1.png' alt='office1'></img>  
                </div>
                <div className='HouseImg2'>
                <img src='/images/building/office_2.png' alt='office2'></img>    
                </div>
                <div className='HouseImg3'>
                  <img src='/images/building/office_3.png' alt='office3'></img>    
                </div>
              </div>
              <div className='main'>

              </div>

            </div>

          </div>
          
        </div>
      );
  


};




   


export default MAINBODY