import "./App.css";
import React from "react";
import useFetch from "./Hooks/useFetch";
function App() {
  const data = useFetch("https://dummyjson.com/users");

  return (
    <>
      {data.users.map((res) =>  <h1>{res.firstName}</h1>)}
    </>
  );
}

export default App;
