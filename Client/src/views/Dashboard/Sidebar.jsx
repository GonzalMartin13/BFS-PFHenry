import { Navbar, Nav } from "react-bootstrap";
import Button from "../../components/Button/Button";
import {
  BsClipboardDataFill,
  BsCursorFill,
  BsPeopleFill,
  BsFillGearFill,
} from "react-icons/bs";

const Sidebar = ({ onButtonClick }) => {
  const sidebarStyle = {
    width: '100%',
  }
  return (
    <Navbar bg="dark" variant="dark" expand="md" style={sidebarStyle}>
      <Navbar.Brand href="#">
        <Button text={<><BsClipboardDataFill /> Panel de Administración</>} onClick={() => onButtonClick("adminGraphs")} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto"> {/* Ajusta la clase de margin a 'mr-auto' */}
          <Nav.Link onClick={() => onButtonClick("Usuarios")}>
            <BsPeopleFill /> Usuarios
          </Nav.Link>
          <Nav.Link onClick={() => onButtonClick("Envios")}>
            <BsCursorFill /> Envíos
          </Nav.Link>
          <Nav.Link onClick={() => onButtonClick("Admin")}>
            <BsFillGearFill /> Admin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Sidebar;