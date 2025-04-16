import React, { createContext, useState } from "react";
export const login = createContext();

export const stateContext=({children})=>{

    const [count, setCount] = useState(0);
    return <login.Provider value={[count, setCount]}>{children}</login.Provider>;
}
