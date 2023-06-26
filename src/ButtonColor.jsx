import React, { useState } from 'react'
import './ButtonColor.css'
function ButtonColor() {
    const [first, setfirst] = useState('black');
  return (
    <div>
        <h1 id='label' style={{color:first,backgroundColor:'black'}} >Button Color {first} </h1>
       <div id='buttons'>
       <button id='red' onClick={()=>setfirst('red')}>red</button>
        <button id='blue' onClick={()=>setfirst('blue')}>blue</button>
        <button id='green' onClick={()=>setfirst('green')}>green</button>
        <button id='yellow' onClick={()=>setfirst('yellow')}>yellow</button>
       </div>
    </div>
  )
}

export default ButtonColor