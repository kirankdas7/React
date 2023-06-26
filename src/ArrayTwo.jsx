import React, { useState } from 'react'

function ArrayTwo() {
    var obj1={
        name:'kiran',
        age:22,
        place:'thrissur'
    }
    console.log(obj1)
 var nameChange=()=>{
setfirst({...obj1,name:'kichu'})
 }

    const [first, setfirst] = useState(obj1)
  return (
    <div>{first.name} {first.age} {first.place}
    <button onClick={nameChange} >Click</button>
    
     </div>
  )
}

export default ArrayTwo