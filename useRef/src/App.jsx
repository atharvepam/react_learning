import { useState } from 'react'

import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  // useEffect(()=>{
  //   setCount((prev)=>prev+1)

  // })
  const count = useRef(0);
  console.log(count);
  useEffect(()=>{
    count.current = count.current + 1

  })
  const inputElement =useRef()
  console.log(inputElement.current)
  const handleClick=()=>{
    inputElement.current.style.backgroundColor="red";
  }
  return (
    <>
     <h1>Name:{name}</h1>
     <h2>Count:{count.current}</h2>
     <input type="text" ref={inputElement}  placeholder='Enter name'  onChange={(e)=>setName(e.target.value)}/>
     <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
