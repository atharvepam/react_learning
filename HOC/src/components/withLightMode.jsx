import React from "react";

function withLightMode(Component) {
    const stylea ={
        backgroundColor : '#212529',
        color:'#eee',
        height:'100vh'
        
    }    
  return (props) => {
      return(

        <div style={stylea}>
            <Component {...props} />
        </div>
      )
      
  }
    

}


export default withLightMode