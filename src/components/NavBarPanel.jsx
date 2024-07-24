import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { add } from './store/cartSlice';
import React from 'react'
import { useSelector } from 'react-redux';

function NavBarPanel() {
    const cartProducts=useSelector(state=>state.cart)
    /////some error getting
    console.log("eeee",cartProducts);
  return (
    
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
       
          <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          
          
          </Nav>
          
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse className='justify-content-end'> 
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length} </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>

          
        
      </Container>
    </Navbar>
    
  )
}

export default NavBarPanel