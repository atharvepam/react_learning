import { createContext } from "react";

export const CounterContext =  createContext([]);
export const counterProvider = (props)=>{
    const [count, setcount] = useState(0);
    return(
        <CounterContext.Provider value={{count,setcount}}>
            {props.children}
        </CounterContext.Provider>
    )

}