import React,{useState} from 'react';
import './App.css'

function App() {

  const [count,setCount] = useState(0);
  const incValue =()=>{
    setCount(count+1)
  }
  const decValue=()=>{
    if(count>0){
      setCount(count-1)

    }
    
  }
  return (
    <>
    <h1>Likes And Dislike Application</h1>
      <h2><button onClick={incValue}>Like</button>:{count}</h2>
      <h2><button onClick={decValue}>Dislike</button></h2>
    </>
  )
}

export default App
