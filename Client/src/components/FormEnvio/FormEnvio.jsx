/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import sucursales from "../FormEnvio/sucursales";
import { Formik } from "formik";
import * as styles from "../FormEnvio/FormEnvio.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setShippingState,
  setImagen,
  clearShippingState,
} from "../../redux/Slices/shippingSlice";
import { clearState, setState } from "../../redux/Slices/quoterslice";
import { setidShipping } from "../../redux/Slices/invoiceUserSlice";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { handleUpload } from "../FormEnvio/utils/cloudinary";
import { Link, useNavigate } from "react-router-dom";
import { enviarBD } from "../FormEnvio/rutaDB";
import axios from "axios";

const FormEnvio = () => {
  const [imagenLocal, setImagenLocal] = useState("");
  const [linkPago, setLinkPago] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const position = [-35.4132981, -65.0205861];
  const myIcon = new Icon({
    iconUrl: "https://i.imgur.com/3q59VGo.png",
    iconSize: [38, 38],
  });

  const { origen, destino, servicios, total } = useSelector(
    (state) => state.quoter
  );

  const { user } = useSelector((state) => state.user);

  const sucursalOrigen = sucursales.find(
    (sucursal) => sucursal.Popup === origen
  );
  const sucursalDestino = sucursales.find(
    (sucursal) => sucursal.Popup === destino
  );

  const handleEnvioBD = async (valores) => {
    try {
      valores.imagen = imagenLocal;
      const postEnviar = await enviarBD(valores);
      console.log(
        "quizas aca no llegue nda",
        postEnviar.idDelEnvio.envio.numeroEnvio
      );
      dispatch(setidShipping(postEnviar.idDelEnvio.envio.numeroEnvio));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFileUpload = async () => {
    const { value: file } = await Swal.fire({
      title: "Selecciona una imagen",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });
    if (file) {
      try {
        const imageUrl = await handleUpload(file);
        console.log(imageUrl);
        imageUrl != "" && setImagenLocal(imageUrl);
        dispatch(setImagen(imageUrl));
      } catch (error) {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo subir la imágen!",
        });
      }
    }
  };

  const showAlertImage = () => {
    return Swal.fire({
      html: `<img src="${imagenLocal}" alt="Imagen" style="width: 450px; height: 350px" />`,
    });
  };
  const onDelete = () => {
    dispatch(setImagen(""));
    setImagenLocal("");
  };
  const clearStateShipping = () => {
    dispatch(clearShippingState());
    dispatch(clearState());
    setImagenLocal("");
    navigate("/cotizacion");
  };

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  useEffect(() => {
    const mercadoPago = async () => {
      try {
        const { data } = await axios.post(
          "https://bfs-pfhenry-production.up.railway.app/pagos/crear",
          /* "http://localhost:3001/pagos/crear" */ {
            total: Number(total),
            servicios,
          }
        );
        setLinkPago(data);
        console.log("la url", data);
      } catch (error) {
        console.error("Error al realizar la solicitud a MercadoPago", error);
      }
    };

    mercadoPago();
  }, []);

  const coordenadasOrigen = sucursalOrigen ? sucursalOrigen.coordenadas : "";
  const coordenadasDestino = sucursalDestino ? sucursalDestino.coordenadas : "";
  const direccionOrigen = sucursalOrigen ? sucursalOrigen.direccion : "";
  const direccionDestino = sucursalDestino ? sucursalDestino.direccion : "";
  const userID = useSelector((state) => state.user.user.email);
  const quoteState = useSelector((state) => state.quoter);
  const idEnvio = useSelector((state) => state.invoice.idShipping);

  return (
    <Formik
      initialValues={{
        nombreRemitente: `${user.name} ${user.lastName}`,
        // razonSocialRemitente: "",
        telefonoRemitente: user.phone,
        emailRemitente: user.email,
        dniRemitente: "",
        nombreDestinatario: "",
        // razonSocialDestinatario: "",
        telefonoDestinatario: "",
        emailDestinatario: "",
        dniDestinatario: "",
        coordenadasOrigen: coordenadasOrigen,
        coordenadasDestino: coordenadasDestino,
        direccionOrigen: direccionOrigen,
        direccionDestino: direccionDestino,
        userID: userID,
      }}
      validate={(valores) => {
        let errores = {};

        //validaciones para Remitente
        // if (!valores.nombreRemitente) {
        //   errores.nombreRemitente = "Debes ingresar un nombre";
        // } else if (
        //   !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/.test(
        //     valores.nombreRemitente
        //   )
        // ) {
        //   errores.nombreRemitente =
        //     "Ingresa tu nombre completo sin contener simbolos";
        // } else if (valores.nombreRemitente.length < 3)
        //   errores.nombreRemitente =
        //     "El nombre es demaciado corto, pon tu nombre completo";

        //Razon social Remitente
        // if (!valores.razonSocialRemitente) {
        //   errores.razonSocialRemitente =
        //     "Debes ingresar tu razon social o Particular";
        // } else if (
        //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.razonSocialRemitente)
        // ) {
        //   errores.razonSocialRemitente = "No puede tener simbolos";
        // }

        // //Telefono Remitente
        // if (!valores.telefonoRemitente) {
        //   errores.telefonoRemitente = "Debes ingresar tu numero de telefono";
        // } else if (!/^[0-9]{7}$/.test(valores.telefonoRemitente)) {
        //   errores.telefonoRemitente =
        //     "Debe ser un numero de telefono valido de 8 digitos";
        // }
        // //email Remitente
        // if (!valores.emailRemitente) {
        //   errores.emailRemitente = "Debes ingresar tu correo electrinico";
        // } else if (
        //   !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        //     valores.emailRemitente
        //   )
        // ) {
        //   errores.emailRemitente = "Debe ser un correo valido";
        // }
        //DNI Remitente
        if (!valores.dniRemitente) {
          errores.dniRemitente = "Debes ingresar tu numero de DNI";
        } else if (!/^[0-9]{8}$/.test(valores.dniRemitente)) {
          errores.dniRemitente =
            "Debe ser un numero de DNI valido de 8 digitos";
        }

        //Validaciones para Destinatario
        if (!valores.nombreDestinatario) {
          errores.nombreDestinatario = "Debes ingresar un nombre";
        } else if (
          !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/.test(
            valores.nombreDestinatario
          )
        ) {
          errores.nombreDestinatario =
            "Ingresa tu nombre completo sin contener simbolos";
        } else if (valores.nombreDestinatario.length < 3)
          errores.nombreDestinatario =
            "El nombre es demaciado corto, pon tu nombre completo";

        //Razon social Destinatario
        // if (!valores.razonSocialDestinatario) {
        //   errores.razonSocialDestinatario =
        //     "Debes ingresar tu razon social o Particular";
        // } else if (
        //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.razonSocialDestinatario)
        // ) {
        //   errores.razonSocialDestinatario = "No puede tener simbolos";
        // }

        //Telefono Destinatario
        if (!valores.telefonoDestinatario) {
          errores.telefonoDestinatario = "Debes ingresar tu numero de telefono";
        } else if (!/^[0-9]{8}$/.test(valores.telefonoDestinatario)) {
          errores.telefonoDestinatario =
            "Debe ser un numero de telefono valido de 8 digitos";
        }
        //email Destinatario
        if (!valores.emailDestinatario) {
          errores.emailDestinatario = "Debes ingresar un correo electrinico";
        } else if (
          !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            valores.emailDestinatario
          )
        ) {
          errores.emailDestinatario = "Debe ser un correo valido";
        }
        //DNI Destinatario
        if (!valores.dniDestinatario) {
          errores.dniDestinatario = "Debes ingresar tu numero de DNI";
        } else if (!/^[0-9]{8}$/.test(valores.dniDestinatario)) {
          errores.dniDestinatario =
            "Debe ser un numero de DNI valido de 8 digitos";
        }

        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        console.log("Valores del formulario:", valores);
        console.log("enviando...");

        const {
          nombreRemitente,

          telefonoRemitente,
          emailRemitente,
          dniRemitente,
          nombreDestinatario,

          telefonoDestinatario,
          emailDestinatario,
          dniDestinatario,
          coordenadasOrigen,
          coordenadasDestino,
          direccionOrigen,
          direccionDestino,
          userID,
        } = valores;

        const shippingInfo = {
          ...quoteState,
          nombreRemitente,

          telefonoRemitente,
          emailRemitente,
          dniRemitente,
          nombreDestinatario,

          telefonoDestinatario,
          emailDestinatario,
          dniDestinatario,
          coordenadasOrigen,
          coordenadasDestino,
          direccionOrigen,
          direccionDestino,
          userID,
        };

        // Envía la información del envío al estado global
        console.log("Antes de la actualización:", valores);
        dispatch(setShippingState(shippingInfo));
        console.log("Después de la actualización:", valores);
        console.log("Estado global después del submit:", shippingInfo);

        await handleEnvioBD(shippingInfo);

        window.location.href = linkPago;

        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Confirmacion de envio</h3>
            <br></br>
            <h4>
              Elegiste realizar un envio: {""}
              <span style={{ color: "#000" }}>
                {servicios.length
                  ? servicios
                      .map((servicio) => capitalizeFirstLetter(servicio))
                      .join(", ")
                  : null}
              </span>
            </h4>

            <h4>
              De: {origen} a {destino}
            </h4>
            <br></br>
            <h4>Agrega el resto de datos necesarios para tu envio:</h4>
            <br></br>
          </div>
          <div>
            <div className={styles.formRemitente}>
              <div>
                <p>Datos del Remitente</p>
                <label className={styles.label}>Nombre Completo</label>
                <input
                  type="text"
                  id="nombreRemitente"
                  name="nombreRemitente"
                  placeholder="Luis Alberto Morales"
                  value={values.nombreRemitente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                  disabled
                ></input>
                {touched.nombreRemitente && errors.nombreRemitente && (
                  <p className={styles.error}>{errors.nombreRemitente}</p>
                )}
              </div>
              {/* <div>
                <label className={styles.label}>Razon social</label>
                <input
                  type="text"
                  id="razonSocialRemitente"
                  name="razonSocialRemitente"
                  placeholder="Particular o Empresa SA de CV"
                  value={values.razonSocialRemitente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                ></input>
                {touched.razonSocialRemitente &&
                  errors.razonSocialRemitente && (
                    <p className={styles.error}>
                      {errors.razonSocialRemitente}
                    </p>
                  )} 
              </div> */}
              <div>
                <label className={styles.label}>Telefono</label>
                <input
                  type="text"
                  id="telefonoRemitente"
                  name="telefonoRemitente"
                  placeholder="54786978"
                  value={values.telefonoRemitente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                  disabled
                ></input>
                {touched.telefonoRemitente && errors.telefonoRemitente && (
                  <p className={styles.error}>{errors.telefonoRemitente}</p>
                )}
              </div>
              <div>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  id="emailRemitente"
                  name="emailRemitente"
                  placeholder="ejemplo@correo.com"
                  value={values.emailRemitente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                  disabled
                ></input>
                {touched.emailRemitente && errors.emailRemitente && (
                  <p className={styles.error}>{errors.emailRemitente}</p>
                )}
              </div>
              <div>
                <label className={styles.label}>DNI</label>
                <input
                  type="text"
                  id="dniRemitente"
                  name="dniRemitente"
                  placeholder="12345678"
                  value={values.dniRemitente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                ></input>
                {touched.dniRemitente && errors.dniRemitente && (
                  <p className={styles.error}>{errors.dniRemitente}</p>
                )}
              </div>
              <div>
                <br></br>
                <label>Sucursal de Origen {origen}</label>
                <br></br>
                <label></label>
                <br></br>
                <label>Direccion para enviar el paquete </label>
                <br></br>
                <label>
                  {" "}
                  {sucursalOrigen
                    ? sucursalOrigen.direccion.map((linea, index) => (
                        <span key={index}>
                          {linea}
                          <br />
                        </span>
                      ))
                    : ""}
                </label>
                <br></br>
              </div>
            </div>

            {/* Destinatario */}
            <div className={styles.formDestinatario}>
              <div>
                <p>Datos del Destinatario</p>
                <label className={styles.label}>Nombre Completo</label>
                <input
                  type="text"
                  id="nombreDestinatario"
                  name="nombreDestinatario"
                  placeholder="Luis Alberto Morales"
                  value={values.nombreDestinatario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                ></input>
                {touched.nombreDestinatario && errors.nombreDestinatario && (
                  <p className={styles.error}>{errors.nombreDestinatario}</p>
                )}
              </div>
              {/* <div>
                <label className={styles.label}>Razon social</label>
                <input
                  type="text"
                  id="razonSocialDestinatario"
                  name="razonSocialDestinatario"
                  placeholder="Particular o Empresa SA de CV"
                  value={values.razonSocialDestinatario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                ></input>
                {touched.razonSocialDestinatario &&
                  errors.razonSocialDestinatario && (
                    <p className={styles.error}>
                      {errors.razonSocialDestinatario}
                    </p>
                  )}
              </div> */}
              <div>
                <label className={styles.label}>Telefono</label>
                <input
                  type="text"
                  id="telefonoDestinatario"
                  name="telefonoDestinatario"
                  placeholder="54786978"
                  value={values.telefonoDestinatario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                ></input>
                {touched.telefonoDestinatario &&
                  errors.telefonoDestinatario && (
                    <p className={styles.error}>
                      {errors.telefonoDestinatario}
                    </p>
                  )}
              </div>
              <div>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  id="emailDestinatario"
                  name="emailDestinatario"
                  placeholder="ejemplo@correo.com"
                  value={values.emailDestinatario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                ></input>
                {touched.emailDestinatario && errors.emailDestinatario && (
                  <p className={styles.error}>{errors.emailDestinatario}</p>
                )}
              </div>

              <div>
                <label className={styles.label}>DNI</label>
                <input
                  type="text"
                  id="dniDestinatario"
                  name="dniDestinatario"
                  placeholder="12345678"
                  value={values.dniDestinatario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input}
                ></input>
                {touched.dniDestinatario && errors.dniDestinatario && (
                  <p className={styles.error}>{errors.dniDestinatario}</p>
                )}
              </div>

              <div>
                <br></br>
                <label>Sucursal de Destino {destino}</label>
                <br></br>
                <label></label>
                <br></br>
                <label>Direccion para recoger el paquete</label>
                <br></br>
                <label>
                  {" "}
                  {sucursalDestino
                    ? sucursalDestino.direccion.map((linea, index) => (
                        <span key={index}>
                          {linea}
                          <br />
                        </span>
                      ))
                    : ""}
                </label>
                <br></br>
              </div>
            </div>

            <div>
              <br></br>
              <br></br>
              <h4>
                Deseas adjuntar una imagen del envio o documentacion relevante?
              </h4>
              <div>
                <Button
                  onClick={handleFileUpload}
                  variant="success"
                  style={{ padding: "9px 20px", fontSize: "20px" }}
                  className="m-4"
                >
                  Subir imagen
                </Button>
              </div>

              <div>
                <Col md="7" sm="12">
                  {imagenLocal !== "" && (
                    <div
                      style={{
                        position: "relative",
                        height: "130px",
                        width: "130px",
                      }}
                    >
                      <Card.Img
                        src={imagenLocal}
                        style={{
                          height: "130px",
                          width: "130px",
                          cursor: "pointer",
                        }}
                        className="img-fluid rounded-2 border w-100 h-100  d-block
                              border border-success"
                        onClick={showAlertImage}
                      />

                      <Button
                        variant="danger"
                        onClick={onDelete}
                        style={{
                          position: "absolute",
                          top: -1.2,
                          right: -1.3,
                          fontSize: "0.7rem",
                          zIndex: 1,
                        }}
                      >
                        X
                      </Button>
                    </div>
                  )}
                </Col>
              </div>

              <br></br>
            </div>

            <div>
              <br></br>
              <h4>Precio Final: ${total}</h4>
              <br></br>
            </div>

            <div>
              <br></br>
              <button type="submit" className={styles.button}>
                Proceder al pago
              </button>
              <br></br>
            </div>

            <div>
              <br></br>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button
                  type="submit"
                  className={styles.buttonCancel}
                  onClick={clearStateShipping}
                >
                  Cancelar y regresar
                </button>
              </Link>
              <br></br>
            </div>

            <div>
              <MapContainer
                center={position}
                zoom={4}
                style={{ height: "390px", width: "70%", margin: "auto" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></TileLayer>

                <Marker position={coordenadasOrigen} icon={myIcon}>
                  <Popup>{`Origen: ${origen}`}</Popup>
                </Marker>

                {coordenadasDestino && (
                  <Marker position={coordenadasDestino} icon={myIcon}>
                    <Popup>{`Destino: ${destino}`}</Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
            <br></br>
            <br></br>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormEnvio;
