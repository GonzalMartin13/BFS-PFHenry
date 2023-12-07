import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import QRCode from "react-qr-code";
// import QRCode from "qrcode.react";
import React from "react";
import { useSelector } from "react-redux";

const ComprobantePDF = () => {
  const {
    origen,
    destino,
    largo,
    ancho,
    alto,
    peso,
    servicios,
    total,

    numeroDeEnvio,
  } = useSelector((state) => state.shipping);

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  let serviciosString = servicios.length
    ? servicios.map((servicio) => capitalizeFirstLetter(servicio)).join(", ")
    : null;

 

  return (
    <PDFViewer style={{ width: "100%", height: "90vh" }}>
      <Document>
        <Page size={"A5"}>
          <View>
            <Text>Guia de envio BFS Servicios</Text>
            <Image
              src="https://i.imgur.com/CGaqrN2.png"
              style={{ maxWidth: "30px" }}
            ></Image>
            <Text>___________________________________________</Text>
            <Text>Origen:</Text>
            <Text> Razon social: Henry Tecnologia</Text>
            <Text> Nombre: Martin Borchardt</Text>
            <Text> Telefono: 56421354</Text>
            <Text> Calle: Mansilla General 2513</Text>
            <Text> CP: K4700</Text>
            <Text> Localidad: {origen}</Text>
            <Text>___________________________________________</Text>
            <Text>Destino:</Text>
            <Text> Razon social: Particular</Text>
            <Text> Nombre: Jaime Rodriguez tellez</Text>
            <Text> Telefono: 58453256</Text>
            <Text> Calle: Balcarce 50 </Text>
            <Text> CP: C1064AAB</Text>
            <Text> Localidad: {destino}</Text>
            <Text>___________________________________________</Text>
            <Text>
              {" "}
              Largo: {largo}, Ancho: {ancho}, Alto: {alto}, Peso: {peso}kg
            </Text>
            <Text>Servicios: {serviciosString}</Text>
            <Text>-</Text>
            <Text>Número de Envío: {numeroDeEnvio}</Text>
            <Text>___________________________________________</Text>
            <QRCode value="Hola lholskafasf" />
     
            <Image
              src="https://i.imgur.com/H3ijfYP.png"
              style={{ maxWidth: "120px" }}
            ></Image>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ComprobantePDF;
