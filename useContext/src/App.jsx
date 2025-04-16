import Child from './components/Child'
import { createContext,useState } from 'react'
export const login = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
   <login.Provider value={[count,setCount]} >

   
    <Child />
    
     
    </login.Provider>
  )
}

export default App
