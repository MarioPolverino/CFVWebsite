import Link from 'next/link'
import React, {useState} from 'react';
import Image from 'next/image'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className="header w-100" expanded={expanded} expand="md">
            <Container>
                <Navbar.Brand href="#home"><Image src="/logo.svg" className="img-fluid logo" width="145" height="61" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={expanded ? 'show' : ''} id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => setExpanded(false)} href="#home">Home</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#services">Services</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#about">About</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#work">Projects</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Link href="#contact"><a onClick={() => setExpanded(false)} className="btn ms-auto ms-md-3 btn-grad">Get in Touch</a></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;