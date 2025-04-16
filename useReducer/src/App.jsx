import { useReducer } from 'react'

import './App.css'
const initialState = {count:0};
const reducer = (state,action)=>{
  console.log(action)
  if(action.type ==="increase"){
  return {count : state.count +1}
  }
  else{
    return {count:state.count-1}
  }
}

function App() {

    const [state,dispatch]=useReducer(reducer,initialState);
    const incValue =()=>{
      dispatch({type:"increase"})

    }
    const decValue =()=>{
      dispatch({type:"decrease"})

    }
  
  return (
    <>
      <h1>Counter Application</h1>
      <br />
      <h2>Count:{state.count}</h2>
      <button onClick={incValue}>Increase</button>
      <button onClick={decValue}>Decrease</button>
    </>
  )
}

export default App
