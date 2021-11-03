import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Navbarku() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">STIMIK SEPNOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarku;
