import React from 'react';
import { Nav , Navbar , NavDropdown  } from 'react-bootstrap';
function Header(props){
    
return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
  CompileAll
  </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link href="#deets">SignUp</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>);
}

export default Header;