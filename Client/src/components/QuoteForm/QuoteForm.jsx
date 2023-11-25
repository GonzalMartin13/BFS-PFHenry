/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


import {
  Button,
  Form,
  Card,
  FloatingLabel,
  Alert,
  Col,
  Row,
  Container,
  Image,
} from "react-bootstrap";
import style from "./quoteForm.module.css";
import axios from "axios";
import { provincias } from "./utils/provincias";
import { resetForm, handleCheck } from "./utils/formUtils";
import { handleUpload } from "./utils/uploadUtils";
import icoTiempo from "./utils/tiempo-rapido.png";
import icoDiscreto from "./utils/confidencial.png/";
import icoCaja from "./utils/caja.png";
import icoCuidado from "./utils/alerta.png";
import icoSobre from "./utils/correo-electronico.png";
import icoCamara from "./utils/camara-reflex-digital.png";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../redux/Slices/quoterslice";
import { PiMapPinThin } from "react-icons/pi";
export default function QuoteForm() {
  const dispatch = useDispatch();
  const quoteState = useSelector((state) => state.quoter);
  console.log(quoteState);
  const fileInputRef = useRef(null);
  const [total, setTotal] = useState();
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
    imagen: "",
  });
  // history para ir a otra ubicacion despues de una accion
  const navigate = useNavigate();
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
  //post a cloudinary y seteo form.imagen con url
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const imageUrl = await handleUpload(file);
      } catch (error) {
        console.error(error);
      }
    }
  };

  //borra  card imagen, limpia input de imagen y setea  (form.imagen="")
  const onDelete = () => {
    setForm({ ...form, imagen: "" });
    fileInputRef.current.value = "";
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
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/envios/", form);
      setTotal(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleContractClick = () => {
      dispatch(setState(form));
      navigate("/confirmacion");
  };

  //limpio todos los estados
  const ClearStates = () => {
    resetForm(setTotal, setServicios, setForm);
  };
  //validacion provisoria
  const isFormValid = () => {
    return form.origen && form.destino;
  };
  return (
    <div style={{ position: "relative" }}>
      <div>
        <Image
          src="https://www.speedboy.cl/Images/index3xx_02.png"
          fluid
          style={{ width: "100%", height: "180px" }}
        />
      </div>
      <Container className={style.containerForm} fluid>
        <Form
          onSubmit={handleFormSubmit}
          style={{
            margin: "15px auto 45px ",
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

          <h4 style={{ marginBottom: "6px" }}>
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

            <Form.Group className={style.seccionPostCloud}>
              {form.servicios.includes("cuidado") && (
                <>
                  <Form.Group style={{ marginTop: "10px" }}>
                    <h4>
                      Puedes dejar constancia del estado del producto que envias
                      <span style={{ marginLeft: "4px" }}>
                        <Image
                          src={icoCamara}
                          rounded
                          width="23px"
                          alt="Express"
                        />
                      </span>
                    </h4>

                    <Form.Control
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      type="file"
                    />
                  </Form.Group>

                  {form.imagen !== "" && (
                    <div className={style.card}>
                      <Card.Img src={form.imagen} className={style.imag} />

                      <Button
                        variant="danger"
                        onClick={onDelete}
                        style={{
                          margin: 0,
                          position: "absolute",
                          top: -1,
                          right: -2,
                          fontSize: "0.7rem",
                          zIndex: 1,
                        }}
                      >
                        X
                      </Button>
                    </div>
                  )}
                </>
              )}
            </Form.Group>

            <Form.Group className="mb-3" style={{ height: "230px" }}>
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
        <>
          {total ? (
            <Alert
              variant="primary"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
              }}
            >
              {` Costo de envio 💲${total} `}
              {
                <Button
                  style={{
                    margin: "8px",
                    width: "200px",
                    padding: "10px",
                    fontSize: "18px",
                  }}
                  variant="info"
                  size="lg"
                  onClick={handleContractClick}
                >
                  Contratar ahora
                </Button>
              }
              {
                <Button
                  size="xs"
                  style={{ marginLeft: "8px" }}
                  variant="light"
                  onClick={ClearStates}
                >
                  en otro momento
                </Button>
              }
            </Alert>
          ) : (
            ""
          )}
        </>
      </Container>
    </div>
  );
}
