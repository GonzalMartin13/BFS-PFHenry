const json = {
  invoice_number: "12345678",
  currency: "USD",
  tax: 21,
  company_name: "B.F.S. Logistica",
  email: "contacto@fbs.com.ar",
  tel: "011-4312-4567",
  client: "Consumidor final",
  items: [
    {
      description:
        "Envio desde Buenos Aires hasta Tucuman, Peso: 1.00kg, incluye servicios: Paquetería, Fragil, Express",
      quantity: 1,
      unit_price: 2500,
      totalSinIva: 2500,
    },
  ],
  gross_total: 2500,
  qr: {
    origen: "Mendoza",
    destino: "Corrientes",
    peso: "5 kg",
    servicios: ["paqueteria", "express", "fragil"],
    date: "29-12-2023",
    total: "3025,00",
    nombreRemitente: "Arnaldo Andre",
    dniRemitente: "23546987",
    nombreDestinatario: "Monica Lopez",
    dniDestinatario: "58654123",
    numeroDeEnvio: "01234567",
    telRemitente: "1139456712",
    telDestinatario: "1139456712",
  },
};

import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "react-bootstrap";
import {
  postInvoiceAsync,
  postInvoice,
} from "../../redux/Slices/invoiceUserSlice";
import { useEffect } from "react";
import axios from "axios"


export default function Comprobante() {
  const dispatch = useDispatch();
  const { invoice } = useSelector((state) => state.invoice);
  const  shipping = useSelector((state) => state.shipping);
  console.log(shipping)
  console.log("desde factura", invoice);
  let url = invoice;
  const handleClick = () => {
    // dispatch(postInvoiceAsync(json));//no descomentar esto
  };
  const limpiar = () => {
    dispatch(postInvoice(" "));
  };

  useEffect(() => {
    console.log(shipping)
    axios.post("http://localhost:3001/envios/", shipping)
  }, []);

  return (
    <Container className="mt-5" fluid style={{ height: "1000px" }}>
      <Button onClick={limpiar}>limpiar estado</Button>
      <Button onClick={handleClick}>generar pdf</Button>
      <p>gracias</p>
      <p>
        El link es de un pdf que cree con la api, si se escanea el qr se puede
        ver en texto algunos datos que puse del envio... los botones estan
        desactivados para que no se consuman las solicitudes que quedan menos de
        30
      </p>
      <a
        href="https://craftmypdf-gen-au.s3.ap-southeast-2.amazonaws.com/1d29ede9-f166-4f39-92c1-cf403b42adde/output.pdf?AWSAccessKeyId=AKIA6ENCBKJYLWJUD36X&Expires=1702027019&Signature=F4%2Bv2aB8TgMChb%2Bk%2BjTyFV9%2FQ9w%3D&X-Amzn-Trace-Id=Root%3D1-6569a487-428ff00f3bb6237066b8f387%3BParent%3Db60f2a2ecc09bf74%3BSampled%3D1%3BLineage%3D22552a75%3A0"
        target="_blank"
        className="btn btn-primary m-3"
      >
        ver pdf
      </a>
    </Container>
  );
}
