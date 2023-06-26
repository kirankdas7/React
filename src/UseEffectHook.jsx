import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [first, setfirst] = useState("hello")
    useEffect(() => {
     alert("hello")
    
     
    }, [first])
    
  return (
    <div>
        <h1>Hello</h1>
        <button onClick={()=>{setfirst("haii")}}>Click </button>
    </div>
  )
}

export default UseEffectHook