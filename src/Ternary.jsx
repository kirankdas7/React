import React, { useState } from 'react'
import TernaryText from './TernaryText'

function Ternary() {
    const [initial, setinitial] = useState (false)
  var  click=()=>{
        setinitial((ab)=>
            !ab
        )
    }
  return (
    <div>
        {initial?<TernaryText/>:""}
        <button onClick={click} >{initial?'hide':'show'} </button>
    </div>
  )
}

export default Ternary