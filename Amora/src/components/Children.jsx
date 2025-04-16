import React from 'react'
import { useSelector } from 'react-redux'

function Children() {
    const count = useSelector((state)=>{state.counter.count})
  return (
    <div>
        <h1>Count : {count}</h1>
    </div>
  )
}

export default Children