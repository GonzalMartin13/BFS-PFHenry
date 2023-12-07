import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { validate } from "./validation";
import Swal from "sweetalert2";
import {searcher, error, lupa} from "./style";
import axios from "axios";
import { setPaquetesSeguimientos } from "../../redux/Slices/seguimientoSlice";
import { useDispatch, useSelector } from "react-redux";
import deliverytruck from "../../assets/delivery.svg";
import { Image } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

  const dispatch = useDispatch();
  const seguimiento = useSelector((state) => state.seguimiento.paqueteSeguimiento);
 

  const handleSubmit = async (id, e) => {
    e.preventDefault();

    // Verificar si el campo de número está vacío
    if (!input.numero.trim()) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingrese un número de seguimiento",
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
      return; // Salir de la función si el campo está vacío
    }

    try {
      const response = await axios.get(`http://https://bfs-pfhenry-production.up.railway.app/envios/${id}`);
      dispatch(setPaquetesSeguimientos(response.data));
      setShowModal(true);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al obtener la información del envío",
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
      throw new Error("Error al traer envío por id", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="seguimiento-envio-container">
      <Form onSubmit={(e) => handleSubmit(input.numero, e)} className="form-container d-flex">
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
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            Estado del envío: {seguimiento.id}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img
    src={deliverytruck}
    alt="Logo BFS"
    style={{
      width: '65px',
      height: '65px',
      marginLeft: seguimiento.status === "Pendiente" ? '0' : 'auto', // Ajustado para renderizar a la izquierda en "Pendiente"
      marginRight: seguimiento.status === "Entregado" ? '0' : 'auto', // Añadido para renderizar a la derecha en "Entregado"
      display: 'block', // Para asegurar que se centre o alinee correctamente
    }}
  />
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th style={seguimiento.status === "Pendiente" ? { background: 'blue', color: 'white' } : {}}>Pendiente</th>
                <th style={seguimiento.status === "En tránsito" ? { background: 'blue', color: 'white' } : {}}>En tránsito</th>
                <th style={seguimiento.status === "Entregado" ? { background: 'blue', color: 'white' } : {}}>Entregado</th>
              </tr>
            </thead>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SeguimientoEnvio;
