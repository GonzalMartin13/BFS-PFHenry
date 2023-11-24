import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import Image from 'react-bootstrap/Image';

import "./MisEnvios.css";

function MisEnvios() {
  const [showModal, setShowModal] = useState(false);

  const handleEstadoButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Image src="https://www.sendcloud.es/wp-content/uploads/2020/05/etiqueta-de-envio-paquete.png" fluid style={{ width: '100%', height: '400px' }}/>
      <br />
      <br />
      <br />
    <div className="mis-envios-container">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Card key={idx} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>251138</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Capital Federal
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#" onClick={handleEstadoButtonClick}>
              Estado
            </Card.Link>
            <Card.Link href="/envios/:id">Detalle</Card.Link>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Estado del envío</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes colocar tu ProgressBar y la tabla de estados */}
          <ProgressBar
            className="mt-3"
            style={{ height: "10px", maxWidth: "480px" }}
            animated
            now={60}
          />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ingreso a sucursal</td>
                <td>Despachado</td>
                <td>En camino</td>
                <td>Entregado</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
    <br />
    <br />
    <br />
    </div>
  );
}

export default MisEnvios;
