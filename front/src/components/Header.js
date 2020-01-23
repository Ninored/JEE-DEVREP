import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => (
<Navbar>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
  </Nav>
</Navbar>
)

export default Header