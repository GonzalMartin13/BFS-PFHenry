import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./navbar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/home">BFS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Servicios" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tipo de envío 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tipo de envío 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tipo de envío 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Capaz algo más
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/cotizacion">Cotizador</Nav.Link>
            <Nav.Link href="/about">Sobre nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
