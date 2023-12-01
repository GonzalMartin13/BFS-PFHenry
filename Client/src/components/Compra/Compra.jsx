import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import { handleUpload } from "./utils/cloudinary";
import {
  setImagen,
  setShippingState,
  clearShippingState,
  setNumeroDeEnvio,
} from "../../redux/Slices/shippingSlice";
import { clearState, setState } from "../../redux/Slices/quoterslice";

const Compra = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imagenLocal, setImagenLocal] = useState("");
  const { destino, origen, servicios, total } = useSelector(
    (state) => state.quoter
  );
  const shippingState = useSelector((state) => state.shipping);
  console.log(shippingState);
  const quoteState = useSelector((state) => state.quoter);

  useEffect(() => {
    dispatch(setShippingState(quoteState));
  }, []);

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

  //funcion que simula la interacccion con el servidor
  const registroDeEnvio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 90000) + 10000;
    dispatch(setNumeroDeEnvio(numeroAleatorio));
    Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/comprobante");
    });
  };

  return (
    <Container
      style={{ backgroundColor: "#fafafa", marginTop: "20px" }}
      className="vh-400 d-flex justify-content-center  "
      fluid
    >
      <Row>
        <Col>
          <ListGroup
            className="mt-5"
            style={{ textAlign: "left", width: "800px" }}
          >
            <ListGroup.Item>
              <h3 style={{ color: "#36a0ff" }}>Usuario: </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 style={{ color: "#36a0ff" }}>
                Provincia de origen:{" "}
                <span style={{ color: "#000" }}>{origen}</span>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 style={{ color: "#36a0ff" }}>
                Provincia de destino:{" "}
                <span style={{ color: "#000" }}>{destino}</span>
              </h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3 style={{ color: "#36a0ff" }}>
                Categorías de Envío:{" "}
                <span style={{ color: "#000" }}>
                  {servicios.length
                    ? servicios
                        .map((servicio) => capitalizeFirstLetter(servicio))
                        .join(", ")
                    : null}
                </span>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 style={{ color: "#36a0ff" }}>
                Agrega el resto de datos necesarios para tu envio:
              </h3>
              <div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item>
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>
                    <h5>
                      {" "}
                      ¿Deseas adjuntar una imágen del envio o de documentación
                      relevante?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{ maxWidth: "700px", overflow: "auto" }}
                  >
                    <Row>
                      <Col md="5" sm="12">
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
                      </Col>
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
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 style={{ display: "inline" }}>
                <Badge bg="danger" className="mx-2 my-2">
                  Precio Final:
                </Badge>
                <span style={{ borderBottom: "2px solid " }}> ${total}</span>
              </h3>
              <Button
                variant="primary"
                size="lg"
                className="mx-4 my-3"
                onClick={registroDeEnvio}
              >
                {" "}
                Confirmar Envio{" "}
              </Button>{" "}
              <Button
                variant="secondary"
                size="lg"
                onClick={clearStateShipping}
              >
                Cancelar compra
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Compra;
