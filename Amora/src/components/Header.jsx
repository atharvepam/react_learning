import React from "react"


function Header({setSearch,count}){
   
    
    return(
        <>
    
        <div className="navbar">
            <div className="logo">
                <h2>Amora</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="search-box">
                <p>Item:{count}</p>
                <input type="text" placeholder="Search Items" onChange={(e)=>{
                    setSearch(e.target.value)
                }} />
                <button >Search</button>

            </div>
        </div>
        </>
    )
}

export default Header