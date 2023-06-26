import React from 'react'

function PropsTwo({person,sajil}) {
console.log(person)
console.log(sajil)
  return (
    <div>
        {/* {
            person.map((person)=>
            

          
 
            <h1>{person.name} {person.age} </h1>
               )

        } */}
            <h4>{sajil.name}</h4>

           
         
    </div>
  )
}

export default PropsTwo