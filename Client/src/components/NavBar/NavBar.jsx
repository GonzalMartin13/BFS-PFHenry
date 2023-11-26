import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Swal from "sweetalert2";

// import NavDropdown from "react-bootstrap/NavDropdown";

import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";
import logoutIcon from "../../assets/logout.svg"
import { useSelector,useDispatch } from "react-redux";
import {logout} from "../../redux/Slices/userSlice"

export default function NavBar() {

const isLogged = useSelector((state)=>state.user.isLoggedIn)
const dispatch = useDispatch()

const Logout = (e) => {
  e.preventDefault();

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro?",
      text: "Cerraras la sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, cerrar sesión",
      cancelButtonText: "No, Cancelar",
      reverseButtons: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        // Realiza el logout solo si el usuario confirma
        dispatch(logout());
        
        // Muestra un mensaje de éxito después del logout
        swalWithBootstrapButtons.fire({
          title: "Sesión cerrada!",
          text: "Haz cerrado sesíón",
          icon: "success"
        });
      } 
    });
};


  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary py-1"
          style={{
            height: "auto",

            width: "100%",
          }}
        >
          {" "}
          <Navbar.Brand href="/">
            <Image src={logo} alt="Logo BFS" style={{ height: "55px" }} />
          </Navbar.Brand>
          {!isLogged ? (
  <div className="ms-auto">
    <Button href="/login" variant="outline-success">
      Ingresar
    </Button>
  </div>
) : (
  <div className="ms-auto">
    <Button onClick={Logout} variant="outline-success">
      <img src={logoutIcon} alt="Logout Icon" />
    </Button>
  </div>
)}
         
          {/* {isLogged &&  
           <div className="ms-auto">
            <Button onClick={Logout}   variant="outline-success">
            <img src={logoutIcon} alt="Logout Icon" />
            </Button>
          </div>} */}
         
          <Navbar.Brand href="/"></Navbar.Brand>
          
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
                {isLogged ?  <Nav.Link href="/envios">Mis envíos</Nav.Link> : null }
               
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
