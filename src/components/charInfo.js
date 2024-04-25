import React from 'react';

    function CHARACTERINFO(props){

        const LeftArrow = ()=>{
            return(
            <div className='arrowLeftWarp'>
                <img alt='arrowLeft' src='/images/icon/arrowLeft.png' className='arrowLeft' onClick={()=>{
                    if(props.anim) return;
                    setTimeout(()=>{props.setValue(props.value-1)}, 0.5*1000)
                    props.setAnim(true);
                    
                    }}
                    ></img>
            </div>
            )
        }
        const RightArrow = ()=>{
            return(
            <div className='arrowRightWarp'>
                <img alt='arrowRight' src='/images/icon/arrowRight.png' className='arrowRight' onClick={()=>{
                    if(props.anim) return;
                    setTimeout(()=>{props.setValue(props.value+1)}, 0.5*1000)
                    props.setAnim(true);
                }}></img>
            </div>
            )
        }
        const getIdList = [
            {
                charSet : 
                <div className='chrName'>
                    <div className='chrNameWarp'>
                    <span>
                        우냐
                    </span>
                    <span>
                        1
                    </span>
                    </div>
                </div>,

                mainName : 
                <div className='chrInfoTitle'>
                    우냐
                </div>,
                subtitle :  
                <div className='chrInfoSubTitle'>       
                    죽일까, 마스터?
                </div>,
                text :
                    <div className='chrInfoText'>
                        <div>솔리튜드 바드대학 중퇴</div>
                        <div>롤체 시즌 6 , 7 다이아</div>
                        <div>어제는 9시에 잤다.</div>
                        <div>2024년 에오르제아 초미녀 대표 출마 준비 중</div>
                        <div>야망 : 에오르제아 전 인구의 라라펠화</div>
                        <div>근력 : 21(도핑함) 민첩 : 18 건강 : 14 지능 : 8 지혜 : 10 매력 : 16</div>
                    </div>,
                role :
                    <ul className='chrInfoRole'>
                        <div>역할</div>
                        <li>사장</li>
                    </ul>,
                time :
                    <div>
                        <ul className='chrInfoTime'>
                            <div>접속 시간대</div>
                            <li><span>평일</span> 21 : 00 ~ 23 : 00 </li>
                            <li><span>주말</span> 맘대롱 </li>
                        </ul>
                    </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(1).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                        <div className='Boss'>사장</div>
                    </div>
                </div>    
                
            },
            {
                charSet : 
                <div className='chrName'>
                    <div className='chrNameWarp'>
                    <span>
                        티김
                    </span>
                    <span>
                        2
                    </span>
                    </div>
                </div>,

                mainName : 
                <div className='chrInfoTitle'>
                    티김
                </div>,
                subtitle :  
                <div className='chrInfoSubTitle'>       
                    대충 하고싶은 한마디. 강조하게.2
                </div>,
                text :
                    <div className='chrInfoText'>
                        더미텍스트들입니다2 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다2 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다2 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다2 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다2 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                    </div>,
                role :
                <ul className='chrInfoRole'>
                    <div>역할</div>
                    <li>하고싶은거 2</li>
                    <li>하고싶은거 2</li>
                    <li>하고싶은거 2</li>
                    <li>하고싶은거 2</li>
                </ul>,
                time :
                <div>
                    <ul className='chrInfoTime'>
                        <div>접속 시간대2</div>
                        <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                        <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                    </ul>
                </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(2).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>하고싶은거2</div>
                    <div>하고싶은거2</div>
                    <div>하고싶은거2</div>
                    <div>하고싶은거2</div>
                    </div>
                </div>    
                
            },
            {
                charSet : 
                <div className='chrName'>
                    <div className='chrNameWarp'>
                    <span>
                        시골숙녀하윤이
                    </span>
                    <span>
                        3
                    </span>
                    </div>
                </div>,

                mainName : 
                <div className='chrInfoTitle'>
                    시골숙녀하윤이
                </div>,
                subtitle :  
                <div className='chrInfoSubTitle'>       
                    대충 하고싶은 한마디. 강조하게.3
                </div>,
                text :
                    <div className='chrInfoText'>
                        더미텍스트들입니다3 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다3 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다3 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다3 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다3 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                    </div>,
                role :
                    <ul className='chrInfoRole'>
                        <div>역할</div>
                        <li>딥던전, 던전</li>
                        <li>고민상담</li>
                        <li>라라펠 룩상담</li>
                        <li>고대 무기</li>
                    </ul>,
                time :
                <div>
                    <ul className='chrInfoTime'>
                        <div>접속 시간대3</div>
                        <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                        <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                    </ul>
                </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(3).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>딥던전, 던전</div>
                    <div>고민상담</div>
                    <div>라라펠 룩상담</div>
                    <div>고대 무기</div>
                    </div>
                </div>    
                
            },
            {
                charSet : 
                <div className='chrName'>
                    <div className='chrNameWarp'>
                    <span>
                        김밤비
                    </span>
                    <span>
                        4
                    </span>
                    </div>
                </div>,

                mainName : 
                <div className='chrInfoTitle'>
                    김밤비
                </div>,
                subtitle :  
                <div className='chrInfoSubTitle'>       
                    무한 긍정의 수석 탐정
                </div>,
                text :
                    <div className='chrInfoText'>
                        <div>에오르제아에 초-신성처럼 등장한 초-해결사(자칭).</div>
                        <div>평소엔 사무소에 죽치고 앉아서 딴짓만 하지만 의뢰가 들어온다면 그 의뢰에 충실하게 임한다.</div>
                        <div>의뢰 내용은 딱히 가리지 않으며, 신사를 지향하고 있어 어떤 손님이라도 항상 신사적으로 대한다.</div>
                        <div>덕분에 방문한 의뢰인들의 만족도는 대단히 높은 편.</div>
                    </div>,
               role :
               <ul className='chrInfoRole'>
                   <div>역할</div>
                   <li>여러가지 컨텐츠 동행(편식은 안해요)</li>
                   <li>상담(편식 진짜 안해요)</li>
               </ul>,
                time :
                <div>
                    <ul className='chrInfoTime'>
                        <div>접속 시간대</div>
                        <li><span>평일</span> 20 : 00 ~ 00 : 00 </li>
                        <li><span>주말</span> 14 : 00 ~ 00 : 00 </li>
                    </ul>
                </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(4).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div className='Detective'>수석 탐정</div>
                    </div>
                </div>    
                
            },
            {
                charSet : 
                <div className='chrName'>
                    <div className='chrNameWarp'>
                    <span>
                        칼데하데
                    </span>
                    <span>
                        5
                    </span>
                    </div>
                </div>,

                mainName : 
                <div className='chrInfoTitle'>
                    칼데하데
                </div>,
                subtitle :  
                <div className='chrInfoSubTitle'>       
                    대충 하고싶은 한마디. 강조하게.5
                </div>,
                text :
                    <div className='chrInfoText'>
                        <div>
                            우연, 운명, 기연 무엇이 여기로 손님을 인도했는지는 아무도 알 수 없지만 결국 손님과 저희는 여기서 만났습니다. 그게 중요한거겠죠?
                        </div>
                        <div>
                            그저 잠깐 여기서 나누는 이야기가, 저희가 도와드리는 그 순간이
                            언젠가 떠올렸을때 웃을 수 있는 기억이 되기를 바랍니다.
                        </div>
                    </div>,
                  role :
                  <ul className='chrInfoRole'>
                      <div>역할</div>
                      <li>제작 말고 어지간한건 전부 가능</li>
                      <li>여고생의 관록으로 이런 저런 고민도 상담 가능</li>
                  </ul>,
                time :
                <div>
                    <ul className='chrInfoTime'>
                        <div>접속 시간대5</div>
                        <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                        <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                    </ul>
                </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(5).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>하고싶은거5</div>
                    <div>하고싶은거5</div>
                    <div>하고싶은거5</div>
                    <div>하고싶은거5</div>
                    </div>
                </div>    
                
            },
            {
                charSet : 
                <div className='chrName'>
                    <div className='chrNameWarp'>
                    <span>
                        거북바위솔
                    </span>
                    <span>
                        6
                    </span>
                    </div>
                </div>,

                mainName : 
                <div className='chrInfoTitle'>
                    거북바위솔
                </div>,
                subtitle :  
                <div className='chrInfoSubTitle'>       
                    제작, 채집, 하우징, 사이트 담당
                </div>,
                text :
                    <div className='chrInfoText'>
                        자신에게 알맞는 제작 메크로가 필요하시거나, 제작 및 채집 레벨링에 도움이 필요하시면 도움을 드릴 수 있습니다. 제작 채집하실 시 심심하셔도 같이 해드릴 수 있습니다. 또한 하우징 관련 의뢰도 수행중이니 필요하시면 말씀해주세요. 팀에 다양한 잡무를 담당하고 있습니다.

                    </div>,
                role :
                    <ul className='chrInfoRole'>
                        <div>역할</div>
                        <li>채집</li>
                        <li>제작</li>
                        <li>사이트 기획</li>
                        <li>하우징</li>
                    </ul>,
                 time :
                 <div>
                     <ul className='chrInfoTime'>
                         <div>접속 시간대6</div>
                         <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                         <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                     </ul>
                 </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(6).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>채집</div>
                    <div>제작</div>
                    <div>사이트 기획</div>
                    <div>하우징</div>
                    </div>
                </div>    
                
            }
        ]

        return(
            
            
            <div className='chrIntro1Warp'>
                <div className='chrIntro'>
                    {props.value === 1 ? <div></div> : <LeftArrow/>}
                    {getIdList[(props.value)-1].charSet}
                    <div className='chrInfo'>
                        <div>
                            {getIdList[(props.value)-1].mainName}
                            {getIdList[(props.value)-1].subtitle}
                            {getIdList[(props.value)-1].text}
                        </div>  
                        <div>
                            {getIdList[(props.value)-1].role}
                        </div>
                        <div>
                            {getIdList[(props.value)-1].time}
                        
                        </div>
                        </div>
                    <div></div>
                            {getIdList[(props.value)-1].charImgset}
                    <div className='rightArea'>
                        <div className='closeButton'>
                            <img alt="closeButton" src='/images/icon/closeicon.png' className='closeButton' onClick={()=>{
                                if(props.anim) return;
                                setTimeout(()=>{props.setValue(0)}, 0.5*1000)
                                props.setAnim(true);
                                // props.setControlAni(prev=>prev + 1);
                                }}></img>
                        </div>
                        {props.value === 6 ? <div></div> : <RightArrow/> }
                    </div>
                </div>
            </div>
        );
    }

  

export default CHARACTERINFO
