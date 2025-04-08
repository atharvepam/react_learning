import React, { useEffect, useState } from "react";
function FetchData(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>(response.json())).then((data)=>{
            console.log("loading.....")
            setTimeout(()=>{
                setData(data)
            },5000)
           
        }).catch((err)=>{console.error(err)})
        
    },[])

    return(
        <>
        <h1>User List</h1>
        <ul>
            {data.map((user)=>{
                return <li key={user.id}>{user.name}</li>

            })}
            {/* {dx */}
        </ul>
        </>
    )
}
export default FetchData;