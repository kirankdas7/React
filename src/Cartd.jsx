import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Cartd() {
    var products=[{
        src:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/b/w/-original-imagqadfx2mdvu4h.jpeg?q=70',
        name:'samsung',
        price:70000

    }
,{
    src:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70',
    name:'APPLE',
    price:100000
},
{
    src:'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/f/6/a/-original-imagfggrbywzk8r6.jpeg?q=70',
    name:'lenova',
    price:30000
}]
  return (
    
    <div style={{display:'flex',flexWrap:'nowrap'}}>
        {
            products.map((prod)=>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.src}  />
                <Card.Body>
                  <Card.Title>{prod.name} </Card.Title>
                  <Card.Text>
                    {prod.price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            )
        }
    
    </div>
  )
}

export default Cartd