import { useState } from "react";

function Index() {
  const [counter, setCounter] = useState(0);

  // useEffect(()=>{
  //   console.log(counter)
  // },[counter])
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter : {counter}</h2>
      <button
        onClick={() => {
          if (counter < 10) {
            // setCounter((counter)=>(counter+1))
            // setCounter((counter)=>(counter+1))
            // setCounter((counter)=>(counter+1))
            for (let i = 1; i <= 4; i++) {
              setCounter(counter + 1);
            }
          } else {
            alert("max Limit reached");
          }
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          } else {
            alert("min Limit reached ");
          }
        }}
      >
        Decrease
      </button>
    </>
  );
}
export default Index;
