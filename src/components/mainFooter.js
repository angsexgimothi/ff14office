import React from 'react';

function FOOTER (){
  return(
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
                  <div>시골숙녀하윤이 @ 펜리르</div>
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
  );
}
export default FOOTER