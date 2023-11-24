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
        <Form.Label className="mb-1"></Form.Label>
        <Form.Group>
          <Form.Control
            className="form-input"
            placeholder="Ingrese el número de seguimiento"
            size="lg"
            value={input.numero}
            onChange={handleChange}
            autoComplete="off"
            name="numero"
            aria-label="Número de Seguimiento"
            type="search"
          />
          {errors.numero && <div className="text-danger">{errors.numero}</div>}
        </Form.Group>
        <Button
          className="form-button"
          variant="outline-success"
          type="button"
          size="lg"
          onClick={handleButtonClick}
        >
          🔎
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            Estado del envío: {trackingNumber}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar
            className="mt-3"
            style={{ height: "10px", maxWidth: "480px" }}
            animated
            now={60}
          />
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Ingreso a sucursal</th>
                <th>Despachado</th>
                <th>En camino</th>
                <th>Entregado</th>
              </tr>
            </thead>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SeguimientoEnvio;
