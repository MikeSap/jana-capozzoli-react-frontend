import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark" bg="dark">
      <Navbar.Brand href="/">Jana Capozzoli</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav navbar variant="pill" className="ml-auto">
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/what_i_do">
              What I Do
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/what_i_do">
              How It Works
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" href="/what_i_do">
              Pricing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" href="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5" href="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
