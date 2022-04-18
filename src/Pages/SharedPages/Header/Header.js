import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/Logo/logo.png';
import auth from '../../../Firebase/Firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="50" alt="logo" />
                    Silvan Fitness Care
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto'>
                        <Nav.Link as={NavLink}
                            to="/"
                            style={({ isActive }) => {
                                return isActive
                                    ? { color: "white", fontWeight: '800' }
                                    : {}
                            }}
                        >Home</Nav.Link>
                        <Nav.Link as={NavLink}
                            to="/blog"
                            style={({ isActive }) => {
                                return isActive
                                    ? { color: "white", fontWeight: '800' }
                                    : {}
                            }}
                        >Blog</Nav.Link>
                        <Nav.Link as={NavLink}
                            to="/about"
                            style={({ isActive }) => {
                                return isActive
                                    ? { color: "white", fontWeight: '800' }
                                    : {}
                            }}
                        >About Me</Nav.Link>

                        {user?.uid
                            ?
                            <Nav.Link as={NavLink}
                                to="/login"
                                onClick={() => signOut(auth)}
                                style={({ isActive }) => {
                                    return isActive
                                        ? { color: "white", fontWeight: '800' }
                                        : {}
                                }}
                            >Sign Out
                            </Nav.Link>
                            :
                            <Nav.Link as={NavLink}
                                to="/login"
                                style={({ isActive }) => {
                                    return isActive
                                        ? { color: "white", fontWeight: '800' }
                                        : {}
                                }}
                            >
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;