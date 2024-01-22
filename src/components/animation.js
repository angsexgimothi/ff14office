import React, {useEffect} from "react";


const ANIMATION = (props)=>{
    useEffect(()=>{setTimeout(()=>props.setAnim(false), 1.7*1000)})
    return(
        <div>
            <section className="page-loading-blocks gray-bg">
                <div className="gray"></div>
            </section>
            <section className="page-loading-blocks">
                <div className="black"></div>
            </section>
        </div>
    )
}

export default ANIMATION