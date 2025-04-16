import React from 'react'
import { useContext } from 'react'
import {login} from '../App'
function Child() {
 const [count,setCount] =useContext(login)

  return (
    <div>Child:{count}

    <br />
    <button onClick={()=>setCount(count+1)}>inc</button></div>
  )
}

export default Child