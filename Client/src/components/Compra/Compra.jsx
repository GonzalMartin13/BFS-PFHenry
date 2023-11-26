import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
} from "../../redux/Slices/shippingSlice";
const Compra = () => {
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
  return (
    <Container
      style={{ border: "1px solid" }}
      className="vh-100 d-flex justify-content-center m4 "
      fluid
    >
      <Row>
        <Col>
          <ListGroup
            className="mt-5"
            style={{ textAlign: "left", width: "800px" }}
          >
            <ListGroup.Item>
              <h3>Usuario: </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Origen: {origen}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Destino: {destino}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>
                Categorías de Envío:{" "}
                {servicios.length ? servicios.join(", ") : null}
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>
                    <h6>
                      {" "}
                      ¿Deseas adjuntar imágenes o documentos relevantes para
                      documentar el envío?
                    </h6>
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
              <h3>
                <Badge>Precio Final: </Badge> ${total}
              </h3>
            </ListGroup.Item>
          </ListGroup>
          <Button variant="primary" size="lg">
            {" "}
            Confirmar Envio{" "}
          </Button>{" "}
          <Button variant="secondary">Cancelar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Compra;
