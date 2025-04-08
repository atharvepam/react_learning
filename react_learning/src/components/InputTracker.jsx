import React, { useState } from 'react'

function InputTracker () {
    const [count,setCount]=useState(0);
    const style ={
        display:"flex",
        gap:"5px"
    }
  return (
    <div style={style}>
        <input type="text" placeholder='Enter Your name' onChange={()=>{
            setCount(count+1);
        }}/>
        <input type="email" placeholder='Enter Your Email' onChange={()=>{
            setCount(count+1);
        }}/>
        <h2>Character: {count}</h2>

        
    </div>
  )
}

export default InputTracker