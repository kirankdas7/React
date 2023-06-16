//newState hooks
import React, { useState } from 'react'

function Count() {
    const [first, setfirst] = useState(0)
    
   const a=()=>{
    if(first<=0){
        alert('0 is infinate');
    }else{
        setfirst(first-1);
    }
   }
  return (
    <div>
        <h1>number:{first} </h1>
        <button onClick={()=>setfirst(first+1)}>increment</button>
        <button onClick={a}>decrement</button>

    </div>
  )
}

export default Count