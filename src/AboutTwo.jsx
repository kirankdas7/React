import React, { useContext } from 'react'
import { newcontext } from './ContextProvider'


function AboutTwo() {
    const display=useContext(newcontext)
    const {first,setFirst,name,setName,car,setCar}=display
    const anotherCar={
        name:'auto',
        color:'yello-color'
    }
  return (
    
   
<div>
    <h1 style={{margin:'100px'}}>About two</h1>

    <h1>{first} </h1>
    {/* <h1>{name} </h1> */}

    {

car.map((abc)=>

<div>
    <h1> {abc.name}  {abc.color} </h1>
</div>
)
    }
    <button onClick={()=>setCar([...car,anotherCar])}> change </button>

</div>

  )
}

export default AboutTwo