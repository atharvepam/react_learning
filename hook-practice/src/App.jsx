import React from "react";

import { useState } from "react";
import "./App.css";

function App() {
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
      <h2>Counter application</h2>
      <h3>COUNTER : {counter}</h3>
      <button onClick={incValue}>Increase</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease</button>
    </>
  );
}

export default App;
