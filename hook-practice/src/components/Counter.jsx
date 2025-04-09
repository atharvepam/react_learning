import React from "react";
import Display from "./Display";
import { useState } from "react";
import { CounterContext } from "../context/context";

function Counter() {
  const [counter, setCounter] = useState(0);
  const incValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
     <CounterContext.Provider value={counter}>
      <Display />
      <h2>Counter application</h2>
      <h3>COUNTER : {counter}</h3>
      <button onClick={incValue}>Increase</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease</button>
      </CounterContext.Provider>
    </>
  );
}

export default Counter;
