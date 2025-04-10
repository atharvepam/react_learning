import { useEffect } from "react";

function useCurrencyInfo(){
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>res.json()).then((res)=>console.log(res))

    },[])
}


