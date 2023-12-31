import './App.css';

function App() {
  return (
    <div className="App">
      <div className='mainWarper'>
        {/* 나중에 리모콘같은거 추가하기  */}
        <div className='headWarper'>
          <div></div>
          <div className='headMenuWarp'>
            <div className='headTitle'>
              에오르지아 탐정 사무소
            </div>
            <div className='headBox1'></div>
            <ul className='mainMenu'>
              <li className='menuMainPage'>메인화면</li>
              <li className='menuInfomation'>이용안내</li>
              <li className='menuContact'>의뢰 & 해결내역</li>
              <li className='menuReview'>리뷰</li>
            </ul>
          </div>
        </div>
        <div className='mainbodywarper'>
          <div className='bodyGrid'>
            <div></div>
            <div className='bodyGridSystem'>
              <div className='bodyImgWarp'>
              <img className='bodyBannerImg' alt='officeMainBanner' src='/images/character/mainbanner.png'></img>
                <div className='bodyBannerText'>
                  <div className='bodyBannerText2'>TROUBLESHOOTER</div>
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
                    <img src='/images/character/unya(s).png' alt='unya'></img>
                    <div className='characterFontWarper'>  
                      <div className='unyaFont1'>우냐</div>
                      <div className='unyaFont2'>우냐</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner2 characterBanners'>
                    <img src='/images/character/tigim(s).png' alt='tigim'></img>
                    <div className='characterFontWarper'>  
                      <div className='tigimFont1'>티김</div>
                      <div className='tigimFont2'>티김</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner3 characterBanners'>
                    <img src='/images/character/sweat(s).png' alt='sweat'></img>
                    <div className='characterFontWarper'>  
                      <div className='sweatFont1'>농쭉이</div>
                      <div className='sweatFont2'>달콤새콤</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner4 characterBanners'>
                    <img src='/images/character/bambi(s).png' alt='bambi'></img>
                    <div className='characterFontWarper'>  
                      <div className='bambi1'>김밤비</div>
                      <div className='bambi2'>김밤비</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner5 characterBanners'>
                    <img src='/images/character/kaldae(s).png' alt='kaldae'></img>
                    <div className='characterFontWarper'>  
                      <div className='kaldae1'>칼데하데</div>
                      <div className='kaldae2'>칼데하데</div>
                    </div>
                  </div>
                  <div className='bodyCharacterBanner6 characterBanners'>
                    <img src='/images/character/turtle(s).png' alt='turtle'></img>
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

      </div>

      <div className='footerWarper'>
        <div className='footerGridSystem'>
          <div></div>
          <div className='footerMain'>
            <div className='footerFlex'>
              <div className='footerLeft'>
                <div className='fotterLeftFlex'>
                  <div className='footerTitle'>
                    방문하신 모든 분들께 최선을 다해 도움을 드릴것을 약속합니다.
                  </div>
                
                  <div className='footerColumns1'>
                    <div>우냐 @ 펜리르</div>
                    <div>김밤비 @ 펜리르</div>
                  </div>
                  <div className='footerColumns2'>
                    <div>티김 @ 펜리르</div>
                    <div>칼데하데 @ 펜리르</div>
                  </div>
                  <div className='footerColumns3'>
                    <div>달콤새콤농쭉이 @ 펜리르</div>
                    <div>거북바위솔 @ 펜리르</div>
                  </div>
                </div>
              </div>
              <div className='footerRight'>
                <div className='footerRightFlex'>
                  <div className='footerRightInfo'>
                    운영 시간
                  </div>
                  <div className='footerRightTime'>
                    <span className='footerSpan'>
                      평일 20:00 ~ 23:00
                    </span>
                    <span>
                      주말 20:00 ~ 23:00
                    </span>
                  </div>
                  <div className='footerRightLocation'>
                    펜리르 시로가네 1구 38번지
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

      </div>
      <div className='chrIntro1Warp'>
        <div className='chrIntro'>
          <div className='arrowLeftWarp'>
            <img alt='arrowLeft' src='/images/icon/arrowLeft.png' className='arrowLeft'></img>
          </div>
          <div className='chrName'>
            <div className='chrNameWarp'>
              <span>
                우냐
              </span>
              <span>
                1
              </span>
            </div>
          </div>
          <div className='chrInfo'>
            <div>
              <div className='chrInfoTitle'>
                우냐
              </div>
              <div className='chrInfoSubTitle'>
                  대충 하고싶은 한마디. 강조하게.
              </div>
              <div className='chrInfoText'>
                더미텍스트들입니다 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                더미텍스트들입니다 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                더미텍스트들입니다 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                더미텍스트들입니다 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                더미텍스트들입니다 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
              </div>
            </div>  
            <div>
              <ul className='chrInfoRole'>
                역할
                <li>하고싶은거 1</li>
                <li>하고싶은거 2</li>
                <li>하고싶은거 3</li>
                <li>하고싶은거 4</li>
              </ul>
            </div>
              <div>
                <ul className='chrInfoTime'>
                  접속 시간대
                  <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                  <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                </ul>
              
              </div>
            </div>
          <div></div>
          <div className='chrinfoImg'>
            <img src='/images/character/unya(L).png' alt='uyna(L)'></img>
            <div className='chrinfoImgText'>
              <div>하고싶은거1</div>
              <div>하고싶은거2</div>
              <div>하고싶은거3</div>
              <div>하고싶은거4</div>
            </div>
          </div>
          <div className='arrowRightWarp'>
            <img alt='arrowright' src='/images/icon/arrowRight.png' className='arrowright'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
