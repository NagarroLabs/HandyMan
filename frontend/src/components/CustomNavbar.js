import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

import './CustomNavbar.css';
import logo from '../icons/Logo_orizontal.svg';
import { AuthContext } from '../shared/context/auth-context';
import { setLoggedIn } from '../redux/actions';

function CustomNavbar(props) {
    const auth = useContext(AuthContext);
    const logOut = () => {
        auth.logout();
        props.setLoggedIn(false);
    };
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand className="mr-3">
                <Link to="/">
                    <img src={logo} style={{ width: 100, marginTop: -7 }} alt="Logo"/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item className="mr-3 nav-link">
                        <Link to="/jobs">
                            <span className="navText">Browse Jobs</span>
                        </Link>
                    </Nav.Item>

                    <Nav.Item className="mr-3 nav-link">
                        <Link to="/about">
                            <span className="navText">About</span>
                        </Link>
                    </Nav.Item>

                    {props.isLoggedIn ? (
                        <NavDropdown
                            className="mr-3"
                            title={<span className="navText">Jobs</span>}
                            id="basic-nav-dropdown"
                        >
                            <Nav.Item>
                                <Link to="/jobs/new">Add Jobs</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/jobs/:userId">Edit Jobs</Link>
                            </Nav.Item>
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
                            <Nav.Item>
                                <Link to="/profile/edit">Edit Profile</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/">
                                    <span onClick={logOut}>Log out</span>
                                </Link>
                            </Nav.Item>
                        </NavDropdown>
                    ) : (
                        <>
                            <Nav.Item className="mr-3">
                                <Link to="/register">
                                    <span className="navText">Register</span>
                                </Link>
                            </Nav.Item>

                            <Nav.Item className="mr-3">
                                <Link to="/login">
                                    <span className="navText">Log In</span>
                                </Link>
                            </Nav.Item>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = (state) => {
    return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { setLoggedIn })(CustomNavbar);
