/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { omit } from "lodash";
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
import { useAuth0 } from "@auth0/auth0-react";

import style from "./quoteForm.module.css";
import axios from "axios";
import { provincias } from "./utils/provincias";
import { resetForm, handleCheck } from "./utils/formUtils";
import { validateForm, objeto } from "./utils/validate";
import icoTiempo from "./utils/tiempo-rapido.png";
import icoDiscreto from "./utils/confidencial.png/";
import icoCaja from "./utils/caja.png";
import icoCuidado from "./utils/alerta.png";
import icoSobre from "./utils/correo-electronico.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setState, setTotal, clearState } from "../../redux/Slices/quoterslice";
import { SiGooglemaps } from "react-icons/si";
import Swal from "sweetalert2";
import { registerUser, registerAdmin, userProfile } from "../../redux/actions/userActions";
import { login, contar, confirmed } from "../../redux/Slices/userSlice";
import imagenCaja from "./utils/imageDimensiones.png";
export default function QuoteForm() {
 // const state = useSelector((state) => state.shipping);

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { contador, isLoggedIn, isProfile, emails } = useSelector((state) => state.user);
  const usuario = useSelector((state) => state.user.user);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [servicios, setServicios] = useState({
    certificada: null,
    fragilBox: null,
    paqueteria: true,
    carteria: null,
    express: null,
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

    if (name === "ancho" || name === "largo" || name === "alto") {
      if (/^[1-9]\d*$/.test(value) || value === "") {
        setForm({ ...form, [name]: value });
      }
    } else if (name === "peso") {
      if (/^\d*$/.test(value) || value === "") {
        setForm({ ...form, [name]: value });
      }
    } else if (name === "origen" || name === "destino") {
      setForm({ ...form, [name]: value });
    }

    setErrors(validateForm({ ...form, [name]: value }, name));
  }

  // function handleChange(event) {
  //   const { value, name } = event.target;
  //   if (
  //     name == "ancho" ||
  //     name == "peso" ||
  //     name == "largo" ||
  //     name == "alto"
  //   ) {
  //     if (/^\d*$/.test(value) || value === "") {
  //       setForm({ ...form, [name]: value });
  //     }
  //   }
  //   if (name == "origen" || name == "destino") {
  //     setForm({ ...form, [name]: value });
  //   }
  //   setErrors(validateForm({ ...form, [name]: value }, name));
  // }
  //setea estado servicio, si paqueteria es checked carteria no , y viceversa.
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleCheck(name, checked, servicios, setServicios);

    setErrors(validateForm(form, name));
    if (name == "paqueteria" && checked) {
      setForm(() => {
        return { ...form, largo: "", ancho: "", alto: "", peso: "" };
      });
      setErrors(() => {
        return {
          ...errors,
          ...objeto,
        };
      });
    }
    if (name == "paqueteria" && !checked) {
      setErrors((prevErrors) =>
        omit(prevErrors, ["largo", "ancho", "alto", "peso"])
      );
      setForm((prev) => {
        return { ...prev, largo: "", ancho: "", alto: "", peso: "" };
      });
    } else if (name == "carteria") {
      setErrors(() => {
        return {
          ...errors,
          ...objeto,
        };
      });
      setForm((prev) => {
        return { ...prev, largo: "", ancho: "", alto: "", peso: "" };
      });
    }
  };
  //
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //estado para mostrar spiner
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://bfs-pfhenry-production.up.railway.app/envios/price",
        form
      );

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

  //anula el submit si no estan completos los campos requeridos
  const isFormValid = () => {
    let booleanoLugares = form.origen && form.destino;
    if (servicios.paqueteria == true) {
      return booleanoLugares && Object.keys(errors).length == 0;
    }
    return booleanoLugares;
  };
  ///
  const handleNavigation = () => {
    if (isProfile) return navigate("/confirmacion");

    if (isLoggedIn) {
      navigate("/profile");
      Swal.fire({
        title: "Actualiza tus datos",
        text: "Para que puedas continuar con la confirmacion de tu pedido",
        icon: "success",
      });
      return dispatch(confirmed(true));
    }

    localStorage.setItem("previousRoute", "/confirmacion");
    loginWithRedirect();
    dispatch(contar());
  };

  if (emails.includes(user?.email) && isAuthenticated && user.email_verified && contador === 2) {
    const previousRoute = localStorage.getItem('previousRoute');
    localStorage.removeItem('previousRoute');
    navigate(previousRoute || '/');
    Swal.fire({
      title: "Sesión iniciada",
      text: `${user.nickname} has iniciado sesión exitosamente como administrador`,
      icon: "success",
    });

    dispatch(login());

    const postUser = {
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
    };

    const postAdmin = {
      nameAdmin: user.nickname,
      emailAdmin: user.email,
    };

    dispatch(registerUser(postUser));
    dispatch(registerAdmin(postAdmin));
  } else if (isAuthenticated && user.email_verified && contador === 2) {
    const previousRoute = localStorage.getItem('previousRoute');
    localStorage.removeItem('previousRoute');
    navigate(previousRoute || '/');
    Swal.fire({
      title: "Sesión iniciada",
      text: `${user.nickname} has iniciado sesión exitosamente`,
      icon: "success",
    });

    dispatch(login());

    const postUser = {
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
    };

    dispatch(registerUser(postUser));
  } else if (isAuthenticated && !user.email_verified && contador === 2) {
    Swal.fire({
      title: "Sesión iniciada",
      text: `${user.nickname} verifica tu Email para acceder a nuestros servicios`,
      icon: "success",
    });

    dispatch(contar());
  }

  if (usuario.phone && contador === 3) {
    const input = {
      name: usuario.name,
      lastName: usuario.lastName,
      phone: usuario.phone,
      email: usuario.email,
      nickname: usuario.nickname
    };
    dispatch(contar());
    dispatch(userProfile(input));
  }

  //
  return (
    <Container className={`${style.containerForm} `} fluid>
      <Form
        onSubmit={handleFormSubmit}
        style={{
          margin: "auto auto 20px ",
          maxWidth: "800px",
          minHeight: "800px",
          padding: "15px 20px",
          borderRadius: "4px",
          backgroundColor: "#e4e1e1bd",
        }}
      >
        <div className="row" style={{ marginBottom: "25px" }}>
          <div className="col-md-6 mb-3">
            <h3>
              Origen
              <>
                <SiGooglemaps style={{ color: "#888a8d" }} />
              </>
            </h3>

            <Form.Select
              name="origen"
              value={form.origen}
              onChange={handleChange}
              aria-label="Default select example"
              className={errors.origen ? style.dangercontent : ""}
            >
              <option value="" disabled hidden>
                Selecciona una provincia
              </option>
              {provincias.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </Form.Select>
            {errors.origen && (
              <span className={style.danger}>{errors.origen}</span>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <h3>
              Destino
              <>
                <SiGooglemaps style={{ color: "#888a8d" }} />
              </>
            </h3>
            <Form.Select
              name="destino"
              value={form.destino}
              onChange={handleChange}
              className={errors.destino ? style.dangercontent : ""}
            >
              <option value="" disabled hidden>
                Selecciona una provincia
              </option>
              {provincias.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </Form.Select>
            {errors.destino && (
              <span className={style.danger}>{errors.destino}</span>
            )}
          </div>
        </div>

        <h4 style={{ marginBottom: "10px" }}>
          ¿Qué tipo de envio queres hacer?{" "}
        </h4>

        <Form.Group className="mb-3">
          <Form.Check
            inline
            label={
              <div>
                <span
                  style={{ marginRight: "2px" }}
                  title="Envío Certificado: Garantizamos la entrega segura al destinatario verificando su identidad mediante contacto telefónico con el remitente. Medidas adicionales de seguridad para asegurar la entrega correcta."
                >
                  Entrega Certificada
                </span>
                <Image
                  src={icoDiscreto}
                  rounded
                  width="23px"
                  alt="certificada"
                />
              </div>
            }
            name="certificada"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={servicios.certificada}
          />

          <Form.Check
            inline
            label={
              <div>
                <span
                  style={{ marginRight: "1px" }}
                  title="Envío Seguro para Artículos Frágiles: Embalaje especializado para proteger tus productos delicados durante el transporte, garantizando su llegada en óptimas condiciones."
                >
                  FragilBox
                </span>
                <Image src={icoCuidado} rounded width="23px" alt="fragilBox" />
              </div>
            }
            name="fragilBox"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={servicios.fragilBox}
          />

          <Form.Check
            inline
            label={
              <div>
                <span
                  style={{ marginRight: "2px" }}
                  title="Sobres de hasta 30 x 30 (cms) y de menos de 60 (grs)"
                >
                  Carteria
                </span>
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
                <span
                  style={{ marginRight: "2px" }}
                  title="Paquetería Tradicional 📦: Envío de bultos con dimensiones de hasta 190 cm en alto, largo o ancho, y peso máximo de 100 kg. Servicio estándar de entrega para tus envíos convencionales, seguro y eficiente."
                >
                  Paqueteria
                </span>
                <Image src={icoCaja} rounded width="23px" alt="paqueteria" />
              </div>
            }
            name="paqueteria"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={servicios.paqueteria}
          />
          <Form.Check
            title="Express 🚀: Llega a la mitad del tiempo de un envío convencional. La opción perfecta para quienes buscan rapidez y eficiencia en la entrega de sus paquetes. ¡Haz que tus envíos lleguen más rápido con Express!"
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
            {loading && (
              <Spinner animation="border" role="status" variant="primary" />
            )}
          </div>

          <Form.Group
            className="mb-3"
            style={{ height: "230px", marginTop: "30px" }}
          >
            {servicios.carteria ? null : (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",

                    flexDirection: "column",
                    padding: "0 4px",

                    borderRadius: "8px",
                    maxWidth: "800px",
                  }}
                >
                  <Row>
                    <Col style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "black",

                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Las medidas deben expresarse en centímetros. El peso
                        máximo para un paquete es de 100 kg.
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Image src={imagenCaja} width="140px"></Image>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Form.Group className="mb-3">
                  <Row>
                    <Col xs={6}>
                      <Form.Group className="mb-1">
                        <FloatingLabel label="Largo (cms)" className="mb-3">
                          <Form.Control
                            onChange={handleChange}
                            value={form.largo}
                            type="text"
                            name="largo"
                            placeholder="Largo (cms)"
                            style={{ marginTop: "20px" }}
                            min="0"
                            className={errors.largo ? style.dangercontent : ""}
                          />
                        </FloatingLabel>
                      </Form.Group>
                      {errors.largo && (
                        <span className={style.danger}>{errors.largo}</span>
                      )}
                      <Form.Group className="mb-3">
                        <FloatingLabel label="Alto (cms)" className="mb-3">
                          <Form.Control
                            onChange={handleChange}
                            value={form.alto}
                            type="text"
                            placeholder="Alto (cms)"
                            name="alto"
                            style={{ marginTop: "30px" }}
                            min="0"
                            className={errors.alto ? style.dangercontent : ""}
                          />
                        </FloatingLabel>
                      </Form.Group>
                      {errors.alto && (
                        <span className={style.danger}>{errors.alto}</span>
                      )}
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <FloatingLabel label="Ancho (cms)" className="mb-3">
                          <Form.Control
                            onChange={handleChange}
                            value={form.ancho}
                            type="text"
                            placeholder="Ancho (cms)"
                            name="ancho"
                            style={{ marginTop: "20px" }}
                            min="0"
                            className={errors.ancho ? style.dangercontent : ""}
                          />
                        </FloatingLabel>
                      </Form.Group>
                      {errors.ancho && (
                        <span className={style.danger}>{errors.ancho}</span>
                      )}
                      <Form.Group className="mb-3">
                        <FloatingLabel label="Peso (Kgs)" className="mb-3">
                          <Form.Control
                            onChange={handleChange}
                            value={form.peso}
                            type="text"
                            placeholder="Peso (Kgs)"
                            name="peso"
                            min="0"
                            step="0.1"
                            style={{ marginTop: "30px" }}
                            className={errors.peso ? style.dangercontent : ""}
                          />
                        </FloatingLabel>
                      </Form.Group>
                      {errors.peso && (
                        <span className={style.danger}>{errors.peso}</span>
                      )}
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
              marginBottom: "5px",
              marginTop: "145px",
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
  );
}
