
import { useState } from 'react';
import './App.css'

function App() {
  const[counter,setCounter]=useState(0);
  
  const incValue = function(){
    setCounter(counter+1)
  }
  const decValue = function(){
    setCounter(counter-1)
    
  }
  return (
    <>
      <h1>Counter Program</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={incValue}>increase</button>
      <br /><br />
      <button onClick={decValue}>decrease</button>

    </>
  )
}

export default App
