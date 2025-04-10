import React, {useState, useEffect } from 'react'


function Github() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/atharvx09").then(res=>res.json()).then(data=>{
            // console.log(data);
            setData(data)
        }).catch(err=>{
            console.error("the error is :",err)
        })

    },[])
  return (
    <>
    <div className='bg-green-400 p-5 '>Github followers:{data.login}</div>
    <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github