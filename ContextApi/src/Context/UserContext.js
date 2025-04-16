import React from "react"
const UserContext =React.createContext() 
export default UserContext




/**
// Wrapped inside a userContext so they can take access of all the states
<UserContext>
    <Login/>
    <signUp/>
    <Cards/>
        <Dashboard/>

    
    
<UserContext/>
 */