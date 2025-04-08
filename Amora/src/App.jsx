import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const[theme,setTheme] = useState(false);
  const[count,setCount]=useState(0);
  const style={
    height:"100vh",
    backgroundColor:theme?'#1a1a1a' : '#f2f2f2'
  }
  const toggleBG=()=>{
    setTheme(prev=>!prev);
  }
  const addValue=()=>{
    setCount(prev=>(prev+1));
  }
  return (
    <>
      <div style={style} className="main">
        <button id="1" onClick={toggleBG}>{theme?"light":"dark"}</button>
        <Header setSearch={setSearch} count={count} />
        <Body search={search} addValue={addValue}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
