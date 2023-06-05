import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl,Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartState } from '../Context/Context'
import {AiFillDelete} from "react-icons/ai"
import './styles.css'
const Header = () => {

  const{state:{cart},
               dispatch} =CartState()
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}> 
        <Container>
            <Navbar.Brand>
               <Link to='/'>Proshop</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                 <FormControl
                 style={{width:600}}
                 placeholder="Search a product"
                 />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                       <Link to="/cart"> <FaShoppingCart color='white' fontSize='25px'/></Link>
                      <Badge  bg="success">{cart.length}</Badge> 
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:260}}>

                      {cart.length>0?(
                        <>
                        {
                           cart.map((prod)=>(
                            <span className='cartitem' key={prod._id}>
                              <div className='cartItemDetail'>
                                <span>{prod.product}</span>
                                <span>$ {prod.price.split(".")[0]}</span>

                              </div>
                               <AiFillDelete
                              fontSize="20px"
                              style={{cursor:"pointer"}}
                              onClick={()=>
                                dispatch({
                                  type:"REMOVE_FROM_CART",
                                  payload:prod,
                                })
                              }
                              /> 
                              <Link to='/cart'><Button>Go to cart</Button></Link>
                            </span>
                        ))}

                        </>
                      ):( <span style={{padding:'10'}}>Cart is empty</span>)}
                       

                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header