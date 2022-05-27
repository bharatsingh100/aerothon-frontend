import React from 'react';
import { Nav,Navbar,Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../style/header.css'

const Header = props => {
    return (
        <div className='header'>
            <Navbar bg="white" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to='/'><h2 className='heading'><span className='logo'>Less</span>Error</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <Nav.Link as={Link} to='/tempaltes'>Templates</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;



