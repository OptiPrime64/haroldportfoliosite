import React from "react";
// import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { HashLink as Link} from 'react-router-hash-link';

const Styles = styled.div`
.navbar{
    background-color: #0d3d3d;
}

a, .navbar-brand, .navbar-nav .nav-link{
    color: #C3DDDA;

    &:hover{
        color:white;
    }
}
`;

export default function NavigationBar(){
    return  (
    <Styles>
        <Navbar expand="md" variant="dark" fixed="top" >
            <Navbar.Brand href="/">Harold Jennett</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link smooth to="/Title/#sectionhome"> Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link smooth to="/Aboutme/#sectionabout"> About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link smooth to="/contact/#sectioncontact"> Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
);
}