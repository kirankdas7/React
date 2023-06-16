import React from 'react'

function ArrayMap() {
    const array=[{name:'kiran',age:'22'},{name:'hari',age:22}]
    console.log("hiii");
  return (
    array.map((display)=>

    
    <div>
        <h1>array map</h1>
        <h1>{display.name} have {display.age} </h1>
    </div>
)
  )
}

export default ArrayMap