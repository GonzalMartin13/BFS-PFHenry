import style from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import image from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";
import { useState } from "react";
import Chat from "../ChatBot/ChatBot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [chatActivo, setChatActivo] = useState(false);
  const handleChat = () => {
    setChatActivo((ChatVisible) => !ChatVisible);
  };

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
              <a href="/about" style={{ textDecoration: "none" }}>
                <p className={style.path}>Quienes Somos</p>
              </a>
              <a href="/sucursales" style={{ textDecoration: "none" }}>
                <p className={style.path}>Sucursales</p>
              </a>
              <a href="/servicios" style={{ textDecoration: "none" }}>
                <p className={style.path}>Servicios</p>
              </a>
            </span>
          </Col>
          <Col md={3}>
            <p className={style.colum1_p}>Informacion de contactos</p>
            <div className={style.row2}>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="2x"
                style={{ marginRight: "10px" }}
              />
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
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                style={{ marginRight: "10px" }}
              />
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
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ marginRight: "10px" }}
              />
              <a
                className={style.link}
                href="/contacto"
                rel="noopener noreferrer"
              >
                enviosbfs01@gmail.com
              </a>
            </div>
          </Col>
          <Col md={3}>
            <p className={style.colum1_p}>Redes Sociales</p>
            <div className={style.gd}>
              <div className={style.row}>
                <p>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ marginRight: "20px" }}
                  />
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ marginRight: "20px" }}
                  />
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    style={{ marginRight: "20px" }}
                  />
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <div className={style.container_footer}>
              <div className={style.copy}>
                © 2023 Todos los Derechos Reservados |{" "}
                <a href="#">SoyHenry Cohorte 43a Grupo 01</a>
              </div>
              <div className={style.info}>
                <a href="">Privacidad y Politica</a> |{" "}
                <a href="">Terminos y Condiciones</a>
              </div>
            </div>
          </Col>
        </Row>

        <button className={style.bot} onClick={handleChat}>
          🤖
        </button>
        {chatActivo && <Chat />}
      </Container>
    </footer>
  );
};

export default Footer;
