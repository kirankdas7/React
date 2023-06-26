import React, { createContext, useState } from 'react'
const newcontext=createContext()
function ContextProvider({children}) {
    const [first, setFirst] = useState('hayy')
    const [name, setName] = useState({name:'kiran',age:23})
    const [car, setCar] = useState([
        {
            name:'BMW',
            color:'red'
        },
        {
            name:'audi',
            color:'white'
        }
    ])
  return (
    <div>
        <newcontext.Provider value={{first,setFirst,name,setName,car,setCar}}>
        {children}
        </newcontext.Provider>
    </div>
  )
}

export default ContextProvider
export {newcontext}