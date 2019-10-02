import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavagationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href='/'>React with Chart.js</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="my-navbar-collapse">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href='/line'>Line</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href='/bar'>Bar</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href='/doughnut'>Doughnut</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href='/bubble'>Bubble</Nav.Link> </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavagationBar;
