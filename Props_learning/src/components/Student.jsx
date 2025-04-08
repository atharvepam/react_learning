import React from 'react'
import { userData } from './User'
import Card from './Card'
// props - Read-only properties that shared between the components 
function Student() {
  return (
    <>
    {userData.map((user)=>(
         <Card key ={user.id} name1={user.name} id={user.id} email={user.email} />
        
    

    ))}
    
    </>
  )
}

export default Student