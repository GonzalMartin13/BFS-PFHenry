/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import {
  Spinner,
  Button,
  Form,
  FloatingLabel,
  Col,
  Row,
  Container,
  Image,
} from "react-bootstrap";
import style from "./quoteForm.module.css";
import axios from "axios";
import { provincias } from "./utils/provincias";
import { resetForm, handleCheck } from "./utils/formUtils";
import icoTiempo from "./utils/tiempo-rapido.png";
import icoDiscreto from "./utils/confidencial.png/";
import icoCaja from "./utils/caja.png";
import icoCuidado from "./utils/alerta.png";
import icoSobre from "./utils/correo-electronico.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setState, setTotal, clearState } from "../../redux/Slices/quoterslice";
import { PiMapPinThin } from "react-icons/pi";
import Swal from "sweetalert2";

export default function QuoteForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [servicios, setServicios] = useState({
    discreto: false,
    cuidado: false,
    paqueteria: true,
    carteria: false,
    express: false,
  });
  const [form, setForm] = useState({
    origen: "",
    destino: "",
    largo: "",
    ancho: "",
    alto: "",
    peso: "",
    servicios: [],
    total: "",
  });

  //setea form(origen, destino, ancho, alto, largo,peso)
  function handleChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  }
  //setea estado servicio, si paqueteria es checked carteria no , y viceversa.
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleCheck(name, checked, servicios, setServicios);
  };
  //
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //estado para mostrar spiner
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:3001/envios/", form);

      // Función de alerta

      typeof data === "number" ? alertFloat(data) : noPrice(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const noPrice = (mensaje) => {
    return Swal.fire({
      title: mensaje,
    });
  };

  const alertFloat = async (total) => {
    setForm({ ...form, total: total });

    return await Swal.fire({
      title: `Total envio: $${total}`,
      showCancelButton: true,
      confirmButtonText: "Contratar ahora",
      cancelButtonText: "En otro momento",
    }).then((response) => {
      if (response.isConfirmed) {
        setForm({ ...form, total: total });
        dispatch(setState(form));
        dispatch(setTotal(total));
        handleNavigation();
      } else {
        dispatch(clearState());
        resetForm(setServicios, setForm);
        dispatch(setTotal(0));
      }
    });
  };
  //actualiza form.servicios con valor de objeto pasado a array de estado "servicio" solo si si la propiedad tiene valor true
  useEffect(() => {
    setForm({
      ...form,
      servicios: Object.keys(servicios).filter(
        (propiedad) => servicios[propiedad] === true
      ),
    });
  }, [servicios]);
  //post a servidor

  //validacion provisoria
  const isFormValid = () => {
    return form.origen && form.destino;
  };
  const handleNavigation = () => {
    return navigate("/confirmacion");
  };
  return (
    <div style={{ position: "relative" }}>
      <Container className={style.containerForm} fluid>
        <Form
          onSubmit={handleFormSubmit}
          style={{
            margin: "0px auto 45px ",
            maxWidth: "800px",
            padding: "30px 20px",
            borderRadius: "4px",
            backgroundColor: "#e4e1e1bd",
          }}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <h3>
                Origen
                <>
                  <PiMapPinThin />
                </>
              </h3>

              <Form.Select
                name="origen"
                value={form.origen}
                onChange={handleChange}
                aria-label="Default select example"
                style={{ marginBottom: "10px" }}
              >
                <option value="" disabled hidden>
                  Selecciona una provincia
                </option>
                {provincias.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </Form.Select>
            </div>

            <div className="col-md-6 mb-3">
              <h3>
                Destino
                <>
                  <PiMapPinThin />
                </>
              </h3>
              <Form.Select
                name="destino"
                value={form.destino}
                onChange={handleChange}
                style={{ marginBottom: "10px" }}
              >
                <option value="" disabled hidden>
                  Selecciona una provincia
                </option>
                {provincias.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </Form.Select>
            </div>
          </div>

          <h4 style={{ marginBottom: "20px" }}>
            ¿Qué tipo de envio queres hacer?{" "}
          </h4>

          <Form.Group className="mb-3">
            <Form.Check
              inline
              label={
                <div>
                  <span style={{ marginRight: "2px" }}>Discreto</span>
                  <Image
                    src={icoDiscreto}
                    rounded
                    width="23px"
                    alt="discreto"
                  />
                </div>
              }
              name="discreto"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={servicios.discreto}
            />

            <Form.Check
              inline
              label={
                <div>
                  <span style={{ marginRight: "1px" }}>Cuidado</span>
                  <Image src={icoCuidado} rounded width="23px" alt="cuidado" />
                </div>
              }
              name="cuidado"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={servicios.cuidado}
            />

            <Form.Check
              inline
              label={
                <div>
                  <span style={{ marginRight: "2px" }}>Carteria</span>
                  <Image src={icoSobre} rounded width="23px" alt="sobre" />
                </div>
              }
              name="carteria"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={servicios.carteria}
            />
            <Form.Check
              inline
              label={
                <div>
                  <span style={{ marginRight: "2px" }}>Paqueteria</span>
                  <Image src={icoCaja} rounded width="23px" alt="paqueteria" />
                </div>
              }
              name="paqueteria"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={servicios.paqueteria}
            />
            <Form.Check
              inline
              label={
                <div>
                  <span style={{ marginRight: "1px" }}>Express</span>
                  <Image src={icoTiempo} rounded width="23px" alt="Express" />
                </div>
              }
              name="express"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={servicios.express}
            />

            <div style={{ display: "block", height: "40px" }}>
              {loading && <Spinner animation="border" role="status" />}
            </div>

            <Form.Group
              className="mb-3"
              style={{ height: "230px", marginTop: "60px" }}
            >
              {servicios.carteria ? null : (
                <>
                  <Form.Group className="mb-3">
                    <Row>
                      <Col xs={6}>
                        <Form.Group className="mb-1">
                          <FloatingLabel label="Largo (cms)" className="mb-3">
                            <Form.Control
                              onChange={handleChange}
                              value={form.largo}
                              type="number"
                              name="largo"
                              placeholder="Largo (cms)"
                              style={{ marginBottom: "10px" }}
                              min="0"
                            />
                          </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <FloatingLabel label="Alto (cms)" className="mb-3">
                            <Form.Control
                              onChange={handleChange}
                              value={form.alto}
                              type="number"
                              placeholder="Alto (cms)"
                              name="alto"
                              style={{ marginBottom: "10px" }}
                              min="0"
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <Form.Group className="mb-3">
                          <FloatingLabel label="Ancho (cms)" className="mb-3">
                            <Form.Control
                              onChange={handleChange}
                              value={form.ancho}
                              type="number"
                              placeholder="Ancho (cms)"
                              name="ancho"
                              style={{ marginBottom: "10px" }}
                              min="0"
                            />
                          </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <FloatingLabel
                            controlId="floatingPeso"
                            label="Peso (Kgs)"
                            className="mb-3"
                          >
                            <Form.Control
                              onChange={handleChange}
                              value={form.peso}
                              type="number"
                              placeholder="Peso (Kgs)"
                              name="peso"
                              className={style.select}
                              min="0"
                              step="0.1"
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form.Group>
                </>
              )}
            </Form.Group>
          </Form.Group>

          <>
            <Button
              style={{
                padding: "5px 30px",
                fontSize: "25px",
                marginBottom: "40px",
              }}
              variant="primary"
              type="submit"
              disabled={!isFormValid()}
            >
              Cotizar
            </Button>
          </>
        </Form>
      </Container>
    </div>
  );
}
