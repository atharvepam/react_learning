import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)
  const textRef = useRef();
  useLayoutEffect(()=>{
    console.log("useEffect");
    console.log(textRef.current)
    if(textRef.current != null){
      const dimension = textRef.current.getBoundingClientRect();
      console.log(dimension)
      textRef.current.style.paddingTop ="200px"


    }
  },[toggle])
  // useLayoutEffect(()=>{
  //   console.log("UseLayoutEffect")
  // },[toggle])
  return (
    <>
     <button onClick={()=>setToggle(!toggle)}>Toggle</button>
     {
      toggle && <h4 ref={textRef}>Hello I'm here.</h4>
     }
    </>
  )
}

export default App
