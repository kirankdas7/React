import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselTwo() {
    const images=[{
        image:'https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg',
       
    } ,{
         image:'https://img.freepik.com/premium-photo/starry-outer-space-background-texture_78899-4926.jpg'   
    },{
        image:'https://img.freepik.com/premium-photo/remote-corner-universe_94937-263.jpg?w=2000'
    }]
  return (
    
    <div>
     
        
          <Carousel >
          {images.map((img)=>
            
      <Carousel.Item>
       


        <img
          className="d-block w-100"
          src={img.image}
          alt="First slide"
        />

      
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
       )
      }
      
    </Carousel>
        

        
      
    
  
    </div>
  )
}

export default CarouselTwo