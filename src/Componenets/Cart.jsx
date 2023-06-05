import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ListGroup,Row,Col } from 'react-bootstrap'
import { CartState } from '../Context/Context'
 
 const Cart = () => {

  const {state :{cart},dispatch,}=CartState();

  const [total,setTotal]=useState()

  useEffect(()=>{
 
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
 
  },[cart])
   return (
     <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            cart.map(prod=>(
              <ListGroup.Item>
             <Row>
              <Col md={2}>
              <span>{prod.product}</span>
              </Col>
              <Col md={2}>
              {prod.price}
             </Col>
             </Row>
             </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className='filter summary'>
        <span className='title'>
          subtotal ({cart.length}) items 
        </span>
        <span style={{fontWeight: 700, fontSize:20}}>Total: $ {total}</span>
        <Button type="button" disabled={cart.length===0}>Procced to check out</Button>
      </div>
     </div>
   )
 }
 
 export default Cart
