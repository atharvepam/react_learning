import React from 'react'
import { useState } from 'react'
function BackgroundChanger() {
    const [dark,setDark]=useState(false);
    const style={
        height:"100vh",
        backgroundColor:dark?'#1a1a1a' : '#f2f2f2'
    }
    const toggleBg = ()=>{
        setDark(prevMode => !prevMode)
    }
  return (

   <div style={style}>
    <button onClick={toggleBg}>Switch to {dark ? 'Light' : 'Dark'}</button>
   </div>
    
  )
}

export default BackgroundChanger