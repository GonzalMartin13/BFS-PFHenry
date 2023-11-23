import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-1 py-1"
          style={{ height: "85px" }}
        >
          {" "}
          <Container fluid>
            <Navbar.Brand href="/home">
              <Image
                src={logo}
                alt="Logo BFS"
                fluid
                style={{ width: "100px", height: "90px" }}
              />
            </Navbar.Brand>
            <div className="ms-auto">
              <Button href="/login" variant="outline-success">
                Ingresar
              </Button>
            </div>
            <Navbar.Brand href="/home"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image
                    src={logo}
                    alt="Logo BFS"
                    fluid
                    style={{ width: "100px", height: "100px" }} // Adjust the size as needed
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/cotizacion">Cotizador</Nav.Link>
                  <Nav.Link href="/about">Sobre nosotros</Nav.Link>
                  <Nav.Link href="/contacto">Contacto</Nav.Link>
                  <Nav.Link href="/servicios">Servicios</Nav.Link>
                  {/* <NavDropdown
                    title="Servicios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Tipo de envío 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Tipo de envio 2{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Tipo de envio 3{" "}
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
