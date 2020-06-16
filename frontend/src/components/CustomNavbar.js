import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

import './CustomNavbar.css';
import logo from '../icons/Logo_orizontal.svg';
import { AuthContext } from '../shared/context/auth-context';
import { setLoggedIn } from '../actions';

function CustomNavbar(props) {
    const auth = useContext(AuthContext);
    const logOut = () => {
        auth.logout();
        props.setLoggedIn(false);
    };
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    <img src={logo} style={{ width: 100, marginTop: -7 }} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/jobs">
                            <span className="navText">Browse Jobs</span>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about">
                            <span className="navText">About</span>
                        </Link>
                    </Nav.Link>
                    {props.isLoggedIn ? (
                        <NavDropdown
                            title={<span className="navText">Jobs</span>}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item>
                                <Link to="/jobs/new">Add Jobs</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/exampleRoute">Edit Jobs</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <></>
                    )}
                </Nav>
                <Nav>
                    {props.isLoggedIn ? (
                        <NavDropdown
                            alignRight
                            title={<span className="navText">Profile</span>}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item>
                                <Link to="/editProfile">Edit Profile</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/">
                                    <span onClick={logOut}>Log out</span>
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <>
                            <Nav.Link>
                                <Link to="/register">
                                    <span className="navText">Register</span>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/login">
                                    <span className="navText">Log In</span>
                                </Link>
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { setLoggedIn })(CustomNavbar);
