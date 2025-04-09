import React from 'react'
import { useRef } from 'react'
function Form() {
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(username.current.value)
        console.log(password.current.value)
        console.log(email.current.value)
    }
    const username =useRef(null)
    const password =useRef(null)
    const email =useRef(null)

  return (
    <div>
        <form onSubmit={handleClick}>
            <input type="name" placeholder='name'  ref={username}/>
            <br />
            <input type="password" placeholder='password'  ref={password}/>
            <br />
            <input type="email" placeholder='email' ref={email}/>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form