import React, { useState } from 'react'

function Usestate() {
    const [first, setfirst] = useState('kiran')
   
  return (
    <div>
        <h1>{first} </h1>
        <button onClick={()=>setfirst('saaa')}>click me</button>
    </div>
  )
}

export default Usestate