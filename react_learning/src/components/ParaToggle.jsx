import React, { useState } from 'react'

function ParaToggle() {
    const[para,hidePara]=useState(false);
    const togglePara = ()=>{
        hidePara(prev => !prev);
    }
    const style ={
        opacity:para? "1":"0 ",

    }
  return (
    <div>
        <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam deleniti magni iusto consectetur consequatur ipsa, similique rem debitis perspiciatis praesentium provident perferendis optio omnis, vitae ab dolore dolorem nulla.</p>
        <button onClick={togglePara}>Change</button>
    </div>
  )
}

export default ParaToggle