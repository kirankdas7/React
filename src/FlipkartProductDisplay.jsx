import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'

function FlipkartProductDisplay() {
    const [first, setfirst] = useState([])
    useEffect(() => {
    axios.get('https://dummyjson.com/products/').then((prod)=>
    
        setfirst(prod.data.products)
    )
    },[])
    console.log(first)

    
    
  return (
    <div className='row'>
        {
            first.map((prod)=>{
                return(
                    <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

       
          <Carousel>
           <Carousel.Item>
        <img
          className="d-block w-100"
          src={prod.images[1]}

          alt="First slide"
        />
        
      </Carousel.Item>
 
    </Carousel>
     
     



                    <Card.Body>
                      <Card.Title>{prod.title} </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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

export default FlipkartProductDisplay