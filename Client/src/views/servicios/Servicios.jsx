import React, { useState } from "react";
import serviciosText from "./Servicios.jsx";
import styleCss from "./servicios.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { IoMailOutline } from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { VscGistSecret } from "react-icons/vsc";
import { LiaWineGlassSolid } from "react-icons/lia";
import {
  Carteria,
  Paqueteria,
  Express,
  Certificada,
  FragilBox,
  Primera,
} from "./ServiciosText.jsx";
export default function Servicios() {
  const [servicio, setServicio] = useState({
    servicio: "primera",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    setServicio({ servicio: name });
    console.log("el", servicio);
  };
  return (
    <Container
      className={styleCss.containerServicios}
      justify-content-center
      fluid
    >
      <h2 className={styleCss.titulo}>
        <span className={styleCss.bfs}>BFS</span> tu mejor aliado en envios.
      </h2>
      <Row className={styleCss.row}>
        <Col
          md={3}
          style={{
            borderRight: "2px solid #4c53afac",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <div className={styleCss.containerButton}>
            <button
              style={
                servicio.servicio === "paqueteria"
                  ? { color: "#d71920", backgroundColor: "#c1bec7da" }
                  : {}
              }
              onClick={handleChange}
              className={styleCss.button}
              name="paqueteria"
            >
              <TfiPackage className={styleCss.ico} /> Paqueteria
            </button>
            <button
              style={
                servicio.servicio === "carteria"
                  ? { color: "#d71920", backgroundColor: "#c1bec7da" }
                  : {}
              }
              onClick={handleChange}
              className={styleCss.button}
              name="carteria"
            >
              <IoMailOutline className={styleCss.ico} /> Carteria
            </button>
            <button
              style={
                servicio.servicio === "fragilBox"
                  ? { color: "#d71920", backgroundColor: "#c1bec7da" }
                  : {}
              }
              onClick={handleChange}
              className={styleCss.button}
              name="fragilBox"
            >
              <LiaWineGlassSolid className={styleCss.ico} /> Fragil
            </button>

            <button
              style={
                servicio.servicio === "express"
                  ? { color: "#d71920", backgroundColor: "#c1bec7da" }
                  : {}
              }
              onClick={handleChange}
              className={styleCss.button}
              name="express"
            >
              <LiaShippingFastSolid className={styleCss.ico} /> Expres
            </button>
            <button
              style={
                servicio.servicio === "certificada"
                  ? { color: "#d71920", backgroundColor: "#c1bec7da" }
                  : {}
              }
              onClick={handleChange}
              className={styleCss.button}
              name="certificada"
            >
              <VscGistSecret className={styleCss.ico} /> Entrega Certificada
            </button>
          </div>
        </Col>
        <Col md={9}>
          <div
            className={
              servicio.servicio == "primera"
                ? styleCss.primera
                : styleCss.textServicios
            }
          >
            {servicio.servicio == "primera" && <Primera />}

            {servicio.servicio == "carteria" && <Carteria />}
            {servicio.servicio == "paqueteria" && <Paqueteria />}
            {servicio.servicio == "express" && <Express />}
            {servicio.servicio == "fragilBox" && <FragilBox />}
            {servicio.servicio == "certificada" && <Certificada />}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
