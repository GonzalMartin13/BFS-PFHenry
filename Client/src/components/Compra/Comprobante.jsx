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
import {
  postInvoiceAsync,
  setStateInvoice,
} from "../../redux/Slices/invoiceUserSlice";

import { Link, useNavigate } from "react-router-dom";
import { setState, clearState } from "../../redux/Slices/quoterslice";
import { clearShippingState } from "../../redux/Slices/shippingSlice";
import { useEffect } from "react";

export default function Comprobante() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const envio = useSelector((state) => state.shipping);
  const { idShipping } = useSelector((state) => state.invoice);
  const { invoice } = useSelector((state) => state.invoice);
  console.log(envio);
  let url = invoice;

  const jsonInvoise = {
    //  currency: "USD",
    tax: 21,
    company_name: "B.F.S. Correos S.A.",
    email: "contacto@bfs.com.ar",
    tel: "011-4312-4567",
    client: "Consumidor final",
    items: [
      {
        quantity: 1,
        unit_price: envio.total / (1.21).toFixed(2),
        totalSinIva: envio.total / (1.21).toFixed(2),
      },
    ],

    qr: {
      origen: envio.origen,
      destino: envio.destino,
      peso: envio.peso || 0.1,
      servicios: envio.servicios,
      date: new Date().toLocaleDateString("es-AR"),
      total: envio.total,
      nombreRemitente: envio.nombreDestinatario,
      dniRemitente: envio.dniRemitente,
      nombreDestinatario: envio.nombreDestinatario,
      dniDestinatario: envio.dniDestinatario,
      numeroDeEnvio: idShipping,
      telRemitente: envio.telefonoRemitente,
      telDestinatario: envio.telefonoDestinatario,
    },
  };
  console.log("el json", jsonInvoise);
  useEffect(() => {
    //dispatch(postInvoiceAsync(jsonInvoise));
    return () => dispatch(clearState());
  }, []);
  const resetStates = () => {
    dispatch(setState(setStateQu));
    dispatch(setStateInvoice());
    dispatch(clearShippingState());
    navigate("/");
  };

  return (
    <Container className="mt-5" fluid style={{ height: "1000px" }}>
      <h1
        style={{
          borderBottom: " 2px solid #969090",
          display: "inline",
          padding: "2px 15px",
        }}
      >
        Gracias por confiar en nosotros!
      </h1>
      <h4 style={{ marginTop: "10px", marginBottom: "12px" }}>
        Tu solicitud de envío ha sido procesada con éxito. Aquí tienes los
        detalles:
      </h4>
      <ListGroup className="fs-4">
        <ListGroup.Item variant="info">Origen: {envio.origen}</ListGroup.Item>
        <ListGroup.Item variant="info">Destino: {envio.destino}</ListGroup.Item>
        <ListGroup.Item variant="info">
          Servicios: {envio.servicios.join(", ")}
        </ListGroup.Item>
        {envio.ancho && envio.alto && envio.ancho && (
          <ListGroup.Item variant="info">
            Dimensiones de la caja:{" "}
            {`Largo: ${envio.largo || "no especificado"} x  Ancho: ${
              envio.ancho || "no especificado"
            } x  Alto: ${envio.alto || "no especificado"}`}
          </ListGroup.Item>
        )}
        {envio.peso && (
          <ListGroup.Item variant="info">
            Peso: {`${envio.largo || "no especificado"} `}
          </ListGroup.Item>
        )}
        <ListGroup.Item variant="info">
          Total pagado: $ {envio.total}
        </ListGroup.Item>
        <ListGroup.Item variant="info">
          Código de seguimiento: {idShipping}
        </ListGroup.Item>
      </ListGroup>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary m-3 p-2"
      >
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
