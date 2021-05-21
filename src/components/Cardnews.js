import React, { useState } from 'react'
//import  "./card.css";
import  {Card,Row,Col } from 'react-bootstrap';
import  './Cardnews.css';

import 'bootstrap/dist/css/bootstrap.min.css';
 function Cardnews() {

 // const[Card]=useState(0);
  return (
    <>
      
      <Row>
  <Card bg="light" text="black" style={{ width: '18rem' }}  className="box" >
    <Card.Header>NEWS</Card.Header>
    <Card.Body>
      <Card.Title>Snow in Turkey Brings Travels woes</Card.Title>
      <Card.Text>
        Heavy snowstrom in Turkey creates
        havoc as hundreds of villages left
        without power and hundreds of road closed.
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card bg="light" text="black" style={{ width: '18rem' }} className="box">
    <Card.Header>NEWS</Card.Header>
    <Card.Body>
      <Card.Title>Landslide Leaving Thousands homeless</Card.Title>
      <Card.Text>
        An about landsslide in the silicon valley
        has left thousands homeless and on the streets.
      </Card.Text>
    </Card.Body>
  </Card>
  </Row>
 

  <Row>
    
  <Card bg="light" text="black" style={{ width: '18rem' }} className="box">
    <Card.Header>NEWS</Card.Header>
    <Card.Body>
      <Card.Title>Hail the size of basebills in New York</Card.Title>
      <Card.Text>
        A rare and unexpected event occured
        today as hall the size of snowball
        hite New York citizens.
      </Card.Text>
    </Card.Body>
  </Card>


  <Card bg="light" text="black" style={{ width: '18rem' }} className="box">
    <Card.Header>NEWS</Card.Header>
    <Card.Body>
      <Card.Title>Earthquake destroying San Fransisco</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  
  </Row>


  </>

  )
}
export default React.memo(Cardnews);