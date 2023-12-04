const setStateQu = {
  origen: "",
  destino: "",
  largo: "",
  ancho: "",
  alto: "",
  peso: "",
  servicios: [],
  total: "",
};
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, ListGroup } from "react-bootstrap";
import { setStateInvoice } from "../../redux/Slices/invoiceUserSlice";

import { Link, useNavigate } from "react-router-dom";
import { setState } from "../../redux/Slices/quoterslice";
import { clearShippingState } from "../../redux/Slices/shippingSlice";

export default function Comprobante() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const envio = useSelector((state) => state.shipping);
  const { idShipping } = useSelector((state) => state.invoice);
  const { invoice } = useSelector((state) => state.invoice);
  const shipping = useSelector((state) => state.shipping);

  let url = invoice;

  const resetStates = () => {
    dispatch(setState(setStateQu));
    dispatch(setStateInvoice());
    dispatch(clearShippingState());
    navigate("/");
  };

  return (
    <Container className="mt-5" fluid style={{ height: "1000px" }}>
      <h1>Gracias por confiar en nosotros!</h1>
      <h4>
        Tu solicitud de envío ha sido procesada con éxito. Aquí tienes los
        detalles:
      </h4>
      <ListGroup className="fs-4">
        <ListGroup.Item variant="info">Origen: {envio.origen}</ListGroup.Item>
        <ListGroup.Item variant="info">Destino: {envio.destino}</ListGroup.Item>
        <ListGroup.Item variant="info">
          Dimensiones de la caja:{" "}
          {`Largo: ${envio.largo || "no especificado"} x  Ancho: ${
            envio.ancho || "no especificado"
          } x  Alto: ${envio.alto || "no especificado"}`}
        </ListGroup.Item>
        <ListGroup.Item variant="info">
          Peso: {`${envio.largo || "no especificado"} `}
        </ListGroup.Item>
        <ListGroup.Item variant="info">
          Total pagado: $ {envio.total}
        </ListGroup.Item>
        <ListGroup.Item variant="info">
          Código de seguimiento: {idShipping}
        </ListGroup.Item>
      </ListGroup>
      <a href={url} target="_blank" className="btn btn-primary m-3 p-2">
        Descargar factura
      </a>
      <Button
        onClick={resetStates}
        variant="outline-success"
        style={{ margin: "auto 10px" }}
      >
        Volver a inicio
      </Button>
      <p className="fs-5 m-4">
        Para concluir el proceso, te invitamos a dirigirte a la{" "}
        <Link to="/sucursales" target="_blank">
          sucursal
        </Link>{" "}
        correspondiente a la ciudad de origen, llevando contigo tu paquete y la
        factura asociada. Nuestro equipo estará encantado de asistirte con el
        despacho.
      </p>

      <p className="fs-5">
        Recuerda que puedes realizar un seguimiento en tiempo real del estado de
        tu envío utilizando el Código de seguimiento proporcionado. Apreciamos
        tu confianza en nuestro servicio y estamos aquí para ayudarte en cada
        paso del camino. Si tienes alguna pregunta o necesitas asistencia
        adicional, no dudes en ponerte en contacto con nuestro equipo de
        soporte.
      </p>
    </Container>
  );
}
