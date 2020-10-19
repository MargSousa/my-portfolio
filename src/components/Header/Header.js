import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {

  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/" id="logo">Margarida Sousa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link id="header-link" href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link id="header-link" href="/about">About</Nav.Link>
            <Nav.Link id="header-link" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
 
export default Header;