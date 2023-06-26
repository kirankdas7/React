import React, { useEffect, useState } from 'react'
import axios, {} from 'axios'
import { Button, Card, Carousel } from 'react-bootstrap'
function AxioxOne() {
  const [first, setfirst] = useState([]) 
  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then((datas)=>{
      console.log(datas.data.products)
      setfirst(datas.data.products)
    })
  })
  return (
    <div className='row ' style={{margin:'50px',display:'flex', justifyContent:'space-between'}}>
      {
        first.map((data)=>
        <Card style={{ width: '18rem' , } }>
      <Card.Img variant="top" src= {data.images[0]} />


      {/* <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}


      <Card.Body>
        <Card.Title>{data.description} </Card.Title>
        <Card.Text>
         {data.category}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
        )
      }
    </div>
  )
}

export default AxioxOne