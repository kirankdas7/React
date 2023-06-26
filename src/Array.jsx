import React, { useState } from 'react'

function Array() {
    var ar=[
        {
            count:1
        },
        {
            count:2
        },
        {
            count:3
        }
    ]

    const [arr, setarr] = useState(ar)
  return (
    <div>
        {
            ar.map((arr)=>
                <h1>{arr.count} </h1>
            )
        }
    </div>
  )
}

export default Array