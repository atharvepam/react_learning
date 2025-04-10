import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function FunctionalCounter() {
    const[count,setCount]=useState(0)
    const addValue=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("component mounted")
        

    },[])
    useEffect(()=>{
        console.log("component Updated...")
        return(()=>{
            if(count ===3){
            console.log("component unMounted")
            }
        })

    },[count])

  return (
    <div>Counter:{count}
    <button onClick={addValue}>Clickme</button>
    </div>
  )
}

export default FunctionalCounter