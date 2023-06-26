import React from 'react'
import PropsTwo from './PropsTwo'

function Props() {
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
        <PropsTwo person={person} sajil={sajil} />
    </div>
  )
}

export default Props