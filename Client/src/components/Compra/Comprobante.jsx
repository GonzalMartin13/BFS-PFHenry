import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";


export default function Comprobante() {
  const {
    origen,
    destino,
    largo,
    ancho,
    alto,
    peso,
    servicios,
    total,

    numeroDeEnvio,
  } = useSelector((state) => state.shipping);
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  let serviciosString = servicios.length
    ? servicios.map((servicio) => capitalizeFirstLetter(servicio)).join(", ")
    : null;
  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5">Detalles del Envío</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <p>Origen: {origen}</p>
                  <p>Destino: {destino}</p>
                  <p>Largo: {largo}</p>
                  <p>Ancho: {ancho}</p>
                  <p>Alto: {alto}</p>
                  <p>Peso: {peso}</p>
                  <p>Servicios: {serviciosString}</p>
                  <p>Total: ${total}</p>
                  <p>Número de Envío: {numeroDeEnvio}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
