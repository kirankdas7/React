import React, { useContext } from 'react'
import { newcontext } from './ContextProvider'


function About() {
    const display=useContext(newcontext)
    const {first,setFirst,name,setName,car,setCar}=display
  
  return (
    
   
<div>
    {

car.map((abc)=>

<div>
    <h1> {abc.name}  {abc.color} </h1>
</div>
)
    }
   

</div>

  )
}

export default About