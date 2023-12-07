import style from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import fb from "../../assets/fb.png"
import insta from "../../assets/insta.png"
import image from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <img src={image} alt="BFS" className={style.img__logo} />
            </div>
          </Col>
          <Col md={3}>
            <p className={style.colum1_p}>Mas informacion sobre BFS </p>
            <span className={style.colum1_spn}>
             <a href="/about"><p className={style.path}>Quienes Somos</p></a>
             <a href="/sucursales"><p className={style.path}>Sucursales</p></a>
             <a href="/servicios"><p className={style.path}>Servicios</p></a>
            </span>
          </Col>
          <Col md={3}>
            <p className={style.colum1_p}>Informacion de contactos</p>
            <div className={style.row2}>
              <img src="https://i.ibb.co/WvGMRvx/ubicacion-logo.png" alt="" />
              <a
                className={style.link}
                href="https://www.google.com/maps?output=search&q=rosario+santa+fe&source=lnms&entry=mc&sa=X&ved=2ahUKEwiGpfv9tMqAAxUOuZUCHa2WAlIQ0pQJegQIDRAB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rosario-Santa Fe-Argentina
              </a>
            </div>
            <div className={style.row2}>
              <img src="https://i.ibb.co/4VJwHrg/whatsapp-logo.png" alt="" />
              <a
                className={style.link}
                href="https://wa.me/message/"
                target="_blank"
                rel="noopener noreferrer"
              >
                +56 945 797-810
              </a>
            </div>
            <div className={style.row2}>
              <img src="https://i.ibb.co/nCbxwm9/gmail-icono.png" alt="" />
              <a
                className={style.link}
                href="/contacto"
                rel="noopener noreferrer"
                >
                enviosbfs01@gmail.com
              </a>
            </div>
            <div className={style.row2}>
              <img src="https://i.imgur.com/6cAn2M9.png" alt="" />
              <a
                className={style.link}
                href="http://localhost:5173/sucursales"
              
                rel="noopener noreferrer"
                >
                sucursales
              </a>
            </div>
          </Col>
          <Col md={3}>
            <p className={style.colum1_p}>Redes Sociales</p>
            <div className={style.gd}>
               <div className={style.row}>
               <p><img src={fb} alt="" /></p>  
               <p><img src={insta} alt="" /></p>  
               <p><img src={linkedin} alt="" /></p>  
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <div className={style.container_footer}>
              <div className={style.copy}>
                © 2018 Todos los Derechos Reservados |{" "}
                <a href="#">Henry Corte 43a Grupo 01</a>
              </div>
              <div className={style.info}>
                <a href="">Privacidad y Politica</a> |{" "}
                <a href="">Terminos y Condiciones</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
