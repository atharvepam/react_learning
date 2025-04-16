import React,{memo,useEffect} from 'react'

function ChildCallback({count,call}) {
    useEffect(() => {
    call();
  }, [call]);
  return (
    <>
    {console.log("child called",count)}
    <div>ChildCallback</div>
    
    
    </>
  )
}

export default memo(ChildCallback)