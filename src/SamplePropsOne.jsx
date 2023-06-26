import React from 'react'
import SamplePropsOneRec from './SamplePropsOneRec'

function SamplePropsOne() {
    var person=[
        {
            name:'vivekp',
            age:27,
            genter:'not-Defined'
        },
        {
            name:'srii',
            age:11,
            genter:'male'
        },
        {
            name:'ramu',
            age:22,
            genter:'male'
        },
        {
            name:'ashwin',
            age:29,
            genter:'male'
        }
    ]
    var dilu={
        name:'dilu',
        age:33,
        genter:'male'
    }
  return (
    <div>     

        {

            person.map((obj)=>{
                return(
                    <SamplePropsOneRec name={obj.name} age={obj.age} />

                )
                
            })
        }   
    </div>
  )
}

export default SamplePropsOne