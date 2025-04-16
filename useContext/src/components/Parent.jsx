import React from 'react'
import { CounterContext } from '../context/context'
function Parent() {
  return (
    <CounterContext>
     
        <button onClick={()=>setCount(count+1)}>dabbao</button>
    </CounterContext>
  )
}

export default Parent