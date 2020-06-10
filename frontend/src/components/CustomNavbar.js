import React from 'react';
import { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css';
import logo from '../icons/Logo_orizontal.svg';
import { AuthContext } from '../shared/context/auth-context';

export default function CustomNavbar(props) {
  const auth = useContext(AuthContext);
  const isLoggedIn = auth.isLoggedIn;
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
          {isLoggedIn ? (
            <NavDropdown
              title={<span className="navText">Jobs</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/jobs/new">Add Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/exampleRoute">
                Edit Jobs
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <></>
          )}
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <NavDropdown
              alignRight
              title={<span className="navText">Profile</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/editProfile">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/" onChange={auth.logout}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Nav.Link href="/register">
                <span className="navText">Register</span>
              </Nav.Link>
              <Nav.Link href="/login">
                <span className="navText">Log In</span>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
