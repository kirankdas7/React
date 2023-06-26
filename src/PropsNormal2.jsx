import React from 'react'

function PropsNormal2(Props) {
    var person2=Props.data;
    var sajil2=Props.sajil;
    console.log(person2);
    console.log(sajil2);
  return (
    <div>
        {

            person2.map((display)=>
            <h1> {display.name} {display.age} </h1>
            )
        }
        <h2> </h2>
    </div>
  )
}

export default PropsNormal2