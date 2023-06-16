import React, { useState } from 'react'

function Button() {
    const [first, setfirst] = useState(buttoncolor[0])
    const buttoncolor=["red","blue","green","yellow"]
    const color=(value)=>{
        setfirst(value);
    }
  return (
    <div>
        <h1>Button color {}</h1>
        <button onClick={color=(red)=>Se} >red</button>
        <button onClick={color=(blue)=>first} >blue</button>
        <button onClick={color=(green)=>first} >green</button>
        <button onClick={color=(blue)=>first} >Yellow</button>

    </div>
  )
}

export default Button