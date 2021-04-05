import React from 'react';
import { Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Logo from './Logo/logo.png'

const Navbars = () => {
    return (
        <>
        <div className="Navigation">
                <div className="col-12">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                        <Navbar.Brand href="/">
                            <img
                                src={Logo}
                                width="70"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav >
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/">Home</NavLink>
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/about">About</NavLink>
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
}

export default Navbars;