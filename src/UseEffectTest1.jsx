import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function UseEffectTest1() {
    const [first, setfirst] = useState([])
    useEffect(() => {
     axios.get('https://dummyjson.com/products').then((prod)=>{

     setfirst(prod.data.products)
     console.log(prod.data.products)

     }) 
    }, [])
    
  return (
    <div>
        {
            
            first.map((prod,index)=>{
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.images[index]} />
                    <Card.Body>
                      <Card.Title>{prod.brand} </Card.Title>
                      <Card.Text>
                       {prod.description}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                )
            })
        }
    </div>
  )
}

export default UseEffectTest1