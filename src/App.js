import './App.css';

function App() {
  return (
    <div className="App">
      <div className='mainWarper'>
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
                  고민 상담부터 돌발임무, 던전 도우미 하우징까지 다양한 의뢰를 받고 있습니다. 곤란할때 여러분의 힘이 되어드리겠습니다. 
                  <br></br>한줄정도 더 길었으면 좋겠는데 무엇을 써야할지 모르겠음 추천 받습니다. 가나다라마바사아자차카파타하.123123123
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
                    <div className='tigim'>

                    </div>
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
                </div>
                <div className='HouseImg2'>  
                </div>
                <div className='HouseImg3'>  
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
    </div>
  );
}

export default App;
