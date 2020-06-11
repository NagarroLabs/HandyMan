import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css';
import logo from '../icons/Logo_orizontal.svg';

export default function CustomNavbar(props) {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} style={{ width: 100, marginTop: -7 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/jobs">
            <span className="navText">Browse Jobs</span>
          </Nav.Link>
          <Nav.Link href="/about">
            <span className="navText">About</span>
          </Nav.Link>
          <NavDropdown
            title={<span className="navText">Dropdown Example</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/exampleRoute">Action</NavDropdown.Item>
         
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/register">
            <span className="navText">Register</span>
          </Nav.Link>
          <Nav.Link href="/login">
            <span className="navText">Log In</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
