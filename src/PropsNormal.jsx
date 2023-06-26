import React from 'react'
import PropsNormal2 from './PropsNormal2'

function PropsNormal() {
    var person=[
        {
            name:'krian',
            age:22
        },
        {
            name:'hari',
            age:19

        }
    ]
    var sajil={
        name:'sajil',
        age:22
    }
  return (
    <div>
        <PropsNormal2 data={person} sajil={sajil} />
    </div>
  )
}

export default PropsNormal