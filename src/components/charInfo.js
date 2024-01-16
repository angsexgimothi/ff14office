import React from 'react';

    function CHARACTERINFO(props){
        const LeftArrow = ()=>{
            return(
            <div className='arrowLeftWarp'>
                <img alt='arrowLeft' src='/images/icon/arrowLeft.png' className='arrowLeft' onClick={()=>props.setValue(props.value-1)}></img>
            </div>
            )
        }
        const RightArrow = ()=>{
            return(
            <div className='arrowRightWarp'>
                <img alt='arrowright' src='/images/icon/arrowRight.png' className='arrowright' onClick={()=>props.setValue(props.value+1)}></img>
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
                    대충 하고싶은 한마디. 강조하게.1
                </div>,
                text :
                    <div className='chrInfoText'>
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                    </div>,
                role :
                    <ul className='chrInfoRole'>
                    역할
                        <li>하고싶은거 1</li>
                        <li>하고싶은거 1</li>
                        <li>하고싶은거 1</li>
                        <li>하고싶은거 1</li>
                    </ul>,
                time :
                    <div>
                        <ul className='chrInfoTime'>
                        접속 시간대1
                            <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                            <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                        </ul>
                    </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(1).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>하고싶은거1</div>
                    <div>하고싶은거1</div>
                    <div>하고싶은거1</div>
                    <div>하고싶은거1</div>
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
                    역할
                        <li>하고싶은거 2</li>
                        <li>하고싶은거 2</li>
                        <li>하고싶은거 2</li>
                        <li>하고싶은거 2</li>
                    </ul>,
                time :
                    <div>
                        <ul className='chrInfoTime'>
                        접속 시간대2
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
                        달콤새콤농쭉이
                    </span>
                    <span>
                        3
                    </span>
                    </div>
                </div>,

                mainName : 
                <div className='chrInfoTitle'>
                    달콤새콤농쭉이
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
                    역할
                        <li>하고싶은거 3</li>
                        <li>하고싶은거 3</li>
                        <li>하고싶은거 3</li>
                        <li>하고싶은거 3</li>
                    </ul>,
                time :
                    <div>
                        <ul className='chrInfoTime'>
                        접속 시간대3
                            <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                            <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                        </ul>
                    </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(3).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>하고싶은거3</div>
                    <div>하고싶은거3</div>
                    <div>하고싶은거3</div>
                    <div>하고싶은거3</div>
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
                    대충 하고싶은 한마디. 강조하게.4
                </div>,
                text :
                    <div className='chrInfoText'>
                        더미텍스트들입니다4 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다4 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다4 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다4 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다4 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                    </div>,
                role :
                    <ul className='chrInfoRole'>
                    역할
                        <li>하고싶은거 4</li>
                        <li>하고싶은거 4</li>
                        <li>하고싶은거 4</li>
                        <li>하고싶은거 4</li>
                    </ul>,
                time :
                    <div>
                        <ul className='chrInfoTime'>
                        접속 시간대4
                            <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                            <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                        </ul>
                    </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(4).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>하고싶은거4</div>
                    <div>하고싶은거4</div>
                    <div>하고싶은거4</div>
                    <div>하고싶은거4</div>
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
                        더미텍스트들입니다5 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다5 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다5 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다5 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다5 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                    </div>,
                role :
                    <ul className='chrInfoRole'>
                    역할
                        <li>하고싶은거 5</li>
                        <li>하고싶은거 5</li>
                        <li>하고싶은거 5</li>
                        <li>하고싶은거 5</li>
                    </ul>,
                time :
                    <div>
                        <ul className='chrInfoTime'>
                        접속 시간대5
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
                    대충 하고싶은 한마디. 강조하게.6
                </div>,
                text :
                    <div className='chrInfoText'>
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                        더미텍스트들입니다1 가나다라마바사 대충 채우고 크기에 따라 위치 변동할 예정
                    </div>,
                role :
                    <ul className='chrInfoRole'>
                    역할
                        <li>하고싶은거 6</li>
                        <li>하고싶은거 6</li>
                        <li>하고싶은거 6</li>
                        <li>하고싶은거 6</li>
                    </ul>,
                time :
                    <div>
                        <ul className='chrInfoTime'>
                        접속 시간대6
                            <li><span>평일</span> 20 : 00 ~ 23 : 00 </li>
                            <li><span>주말</span> 20 : 00 ~ 23 : 00 </li>
                        </ul>
                    </div>,
                charImgset :                     
                <div className='chrinfoImg'>
                    <img src='/images/character/charImg(6).png' alt='uyna(L)'></img>
                    <div className='chrinfoImgText'>
                    <div>하고싶은거6</div>
                    <div>하고싶은거6</div>
                    <div>하고싶은거6</div>
                    <div>하고싶은거6</div>
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
                            <img alt="closeButton" src='/images/icon/closeicon.png' className='closeButton' onClick={()=>props.setValue(0)}></img>
                        </div>
                        {props.value === 6 ? <div></div> : <RightArrow/> }
                    </div>
                </div>
            </div>
        );
    }

  

export default CHARACTERINFO
