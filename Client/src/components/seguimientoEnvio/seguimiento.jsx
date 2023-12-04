import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { validate } from "./validation";
import Swal from "sweetalert2";
import {searcher, error, lupa} from "./style";

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
  const [progress, setProgress] = useState(0);

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    const validTrackingNumbers = ["2c872505-e2e2-47f2-b24c-46167c8b9c58", "54236", "87521"];
    const enteredNumber = input.numero.trim();

    if (validTrackingNumbers.includes(enteredNumber)) {
      setShowModal(true);
      setTrackingNumber(enteredNumber);

      // Simular estados del envío con diferentes posiciones de la barra de progreso
      switch (enteredNumber) {
        case "2c872505-e2e2-47f2-b24c-46167c8b9c58":
          setProgress(40);
          break;
        case "54236":
          setProgress(62);
          break;
        case "87521":
          setProgress(100);
          break;
        default:
          setProgress(0);
      }
    } else {
      Swal.fire({
        title: "El número de seguimiento no pertenece a ningun envío",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster"
       
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster"
        },

        icon: 'error',
        
      
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="seguimiento-envio-container">
  <Form onSubmit={handleButtonClick} className="form-container d-flex">
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
        style={searcher}
      />
      {errors.numero && (
        <div className="text-danger" style={error}>
          {errors.numero}
        </div>
      )}
    </Form.Group>
    <Button
      className="form-button"
      variant="outline-success"
      type="submit"
      size="lg"
      style={lupa}
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
      {progress > 0 ? (
        <>
          <ProgressBar
            className="mt-3"
            style={{ height: "10px", maxWidth: "480px" }}
            animated
            now={progress}
          />
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th style={progress >= 0 && progress < 20 ? { background: 'blue', color: 'white' } : {}}>Ingreso a sucursal</th>
                <th style={progress >= 20 && progress < 50 ? { background: 'blue', color: 'white' } : {}}>Despachado</th>
                <th style={progress >= 50 && progress < 80 ? { background: 'blue', color: 'white' } : {}}>En camino</th>
                <th style={progress >= 80 ? { background: 'blue', color: 'white' } : {}}>Entregado</th>
              </tr>
            </thead>
          </Table>
        </>
      ) : (
        <p>El número de seguimiento no pertenece a ningún envío</p>
      )}
    </Modal.Body>
  </Modal>
</div>

  );
}

export default SeguimientoEnvio;
