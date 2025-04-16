import React from 'react'
import Counter from './components/Counter'

import { useState } from 'react'
function App() {
  const[visible,setVisible]=useState(true);
  
  
  return (
    <div>
     
      <button onClick={()=>{
        setVisible(!visible)
      }}>Change to unMount</button>
      {(visible) ? <Counter visible={visible} /> : <h1>UNMOUNTED</h1>}
      
    </div>
  )
}

export default App