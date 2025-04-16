import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Counter({visible}){
    const [count,setCount] =useState(0);
    useEffect(()=>{
        console.log("Mounted")
        return (()=>{
            console.log("Unmounted")
        })
    },[visible])
    useEffect(()=>{
        console.log("updated the count",count);
    },[count])
    return (
        <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increase</button>
        </>
    )
}

export default Counter;