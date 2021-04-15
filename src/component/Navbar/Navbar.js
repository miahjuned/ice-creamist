import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarMenu = () => {
    return (
        <Navbar bg="info" variant="dark">
            <Navbar.Brand to="#home">Icecreamist</Navbar.Brand>
            <Container>
                <NavbarCollapse className="justify-content-md-end">
                    <Nav className="ml-auto">
                        <Link className="pr-5 navbarItem" to="/home">Home</Link>
                        <Link className="pr-5 navbarItem" to="/order">Order</Link>
                        <Link className="pr-5 navbarItem" to="/admin">Admin</Link>
                        <Link className="pr-5 navbarItem" to="/deals">Deals</Link>
                        <Link className="pr-5 navbarItem" to="/login">Login</Link>
                        
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="search" className="mr=sm=2"/>
                        <Button variant="outline-light">search</Button>
                    </Form>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;