import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import { validate } from "./validation";

function SeguimientoEnvio() {
  const [errors, setErrors] = useState({
    numero: "",
  });

  const [input, setInput] = useState({
    numero: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    const validationErrors = validate({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: validationErrors[event.target.name],
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleButtonClick = () => {
    setShowModal(true);
    setTrackingNumber(input.numero);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="seguimiento-envio-container">
      <Form className="form-container d-flex">
        <Form.Group>
          <Form.Control
            className="me-2 form-input"
            placeholder="Ingresá el número de seguimiento"
            size="lg" // Cambiado a tamaño grande
            value={input.numero}
            onChange={handleChange}
            autoComplete="off"
            name="numero"
            aria-label="Search"
            type="search"
          />
          {errors.numero && <div className="text-danger">{errors.numero}</div>}
        </Form.Group>
        <Button
          className="form-button"
          variant="outline-success"
          type="button"
          size="lg" // Cambiado a tamaño grande
          onClick={handleButtonClick}
        >
          🔎
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Estado del envío:{trackingNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
  );
}

export default SeguimientoEnvio;
