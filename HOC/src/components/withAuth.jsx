import Error from "./Error"
const withAuth = (Component)=>{
    const isAuthentic = false;

    return function(props){
        if(isAuthentic){

            return <Component  {...props}  />
        }
        else{
            return <Error />
        }
    }
}


export default withAuth;