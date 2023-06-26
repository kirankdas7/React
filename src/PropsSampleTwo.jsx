import React from 'react'
import PropsSampleTwoRc from './PropsSampleTwoRc'

function PropsSampleTwo() {
    var ob1={
        name:'ram',
        genter:'male'
    }
  return (
    <div>
        <PropsSampleTwoRc objName={ob1.name} objgenter={ob1.genter} />
    </div>
  )
}

export default PropsSampleTwo