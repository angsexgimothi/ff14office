import React from "react";

const CONTACT= () =>{
    return(
    <div className="contactWarper">
        <div></div>
        <div className="contactSubWarper">
            <div className="contactTitleWarp">
                <div className="contactTitle">의뢰 & 해결 내역</div>
                <div className="contactInputWarper">
                    <input type="text" className="contactInput" id="contactInput" placeholder="검색어를 입력해 주세요."></input>
                    <div className="glassWarper">
                        <img className="glass" src="/images/icon/magnifyingGlassIcon.png"></img>
                    </div>
                </div>

            </div>
            <div className="contactSubtitleWarp">
                <div className="contactSubtitleNumber">번호</div>
                <div className="contactSubtitleTitle">제목</div>
                <div className="contactSubtitleauthor">글쓴이</div>
                <div className="contactSubtitledate">등록일</div>
            </div>
            <div className="contactBox">
            </div>
            <div className="numbers">
                <div className="buttonsWarp">
                    <div>
                        <img src="/images/icon/arrowDoubleLeft.png"></img>
                    </div>
                    <div>
                        <img src="/images/icon/arrowLeft(s).png"></img>
                    </div>
                    <div className="latterMoveUp addColor">1</div>
                    <div className="latterMoveUp">2</div>
                    <div className="latterMoveUp">3</div>
                    <div className="latterMoveUp">4</div>
                    <div className="latterMoveUp">5</div>
                    <div className="latterMoveUp">6</div>
                    <div className="latterMoveUp">7</div>
                    <div className="latterMoveUp">8</div>
                    <div className="latterMoveUp">9</div>
                    <div className="latterMoveUp">10</div>
                    <div>
                        <img src="/images/icon/arrowRight(s).png"></img>
                    </div>
                    <div>
                        <img src="/images/icon/arrowDoubleRight.png"></img>
                    </div>
                </div>
                <div className="contactButton">
                    의뢰하기
                </div>
            </div>
        </div>
        <div></div>
    </div>
    )
}

export default CONTACT;