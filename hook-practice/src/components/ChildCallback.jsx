import React,{memo,useEffect} from 'react'

function ChildCallback({count2,call}) {
    useEffect(() => {
        call();
      }, [call]);
  return (
    <>
    {console.log("child called",count2)}
    <div>ChildCallback</div>
    
    
    </>
  )
}

export default memo(ChildCallback)