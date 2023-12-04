import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// import NavDropdown from "react-bootstrap/NavDropdown";

import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import Login from "../../views/Login/Login";
import {nav, logobfs, menuout, logoin, menuin, menuletter} from "./style";
import SeguimientoEnvio from "../seguimientoEnvio/seguimiento";

export default function NavBar() {
  const isLogged = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary py-1"
          style={nav}
        >
          {" "}
          <Navbar.Brand href="/">
            <Image src={logo} alt="Logo BFS" style={logobfs} />
          </Navbar.Brand>

          <div className="ms-auto">
            <SeguimientoEnvio />
          </div>

          <div className="ms-auto">
            <Login></Login>
          </div>

          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={menuout}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={menuin}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image
                  src={logo}
                  alt="Logo BFS"
                  fluid
                  style={logoin} // Adjust the size as needed
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/cotizacion" style={menuletter}>Cotizador</Nav.Link>
                <Nav.Link href="/about" style={menuletter}>Sobre nosotros</Nav.Link>
                <Nav.Link href="/contacto" style={menuletter}>Contacto</Nav.Link>
                <Nav.Link href="/" style={menuletter}>Servicios</Nav.Link>
                {isLogged ? (
                  <Nav.Link href="/envios" style={menuletter}>Mis envíos</Nav.Link>
                ) : null}

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
        </Navbar>
      ))}
    </>
  );
}
