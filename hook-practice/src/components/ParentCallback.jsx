import React, { memo,useCallback, useState } from 'react'
import ChildCallback from "./ChildCallback"
function ParentCallback() {
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);
    const incValue1=()=>{
        setCount(count+1);
    }
    const incValue2= ()=>{
        setCount2(count2+1);
    }
    const call =useCallback(()=>{
        console.log("child called")
    })
  return (
    <>
    <ChildCallback count={count} call={call} />
    <h1>Counter1 :{count}</h1>
    <h1>Counter2 :{count2}</h1>
    <button onClick={incValue1}>Increase Counter 1</button>
    <button onClick={incValue2}> Increase Counter 2</button>

    </>
  )
}

export default ParentCallback