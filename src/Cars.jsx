import React, { useState } from 'react'
import { First } from 'react-bootstrap/esm/PageItem'

function Cars() {
  const [vechilea, setvechile] = useState([  {
    vechile:'bike',
    tire:2,
    speed:60
},
{
    vechile:'auto',
    tire:3,
    speed:40
}
])

var vechileOne=[{
    vechile:'car',
    tire:4,
    speed:150
}]
       const addNew=()=>{
        setvechile([...vechilea,...vechileOne])
        console.log([...vechilea])
       } 
    
  return (
<div>
<table>
        <tr>
            <th>Vechile</th>
            <th>Tire</th>
            <th>speed</th>
        </tr>
        {
            vechilea.map((dis)=>
           <tr>
            <td>{dis.vechile} </td>
            <td>{dis.tire} </td>
            <td>{dis.speed} </td>
           </tr>
            )
        }
    </table>
    <button onClick={addNew} >Add One</button>
</div>
  )
}

export default Cars