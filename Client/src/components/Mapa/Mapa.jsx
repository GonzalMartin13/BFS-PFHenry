import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import sucursales from "./Sucursales";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
const Mapa = () => {
  const position = [-35.4132981, -65.0205861];
  const myIcon = new Icon({
    iconUrl: "https://i.imgur.com/3q59VGo.png",
    iconSize: [38, 38],
  });

  return (
    <div>
     
     <div style={{
  maxWidth: "960px",  // Establece el ancho máximo que desees
  margin: "0 auto",   // Centra el contenedor en la página
  backgroundColor: "#f8f9fa",
  border: "1px solid #dee2e6",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
  marginTop: "20px",
}}>
  <h3 style={{ margin: "15px" }}>Nuestras sucursales</h3>
</div>
      <div
        style={{
          height: "550px",
          width: "75%",
          display: "flex",
          margin: "auto",
        }}
      >
        <MapContainer
          center={position}
          zoom={4}
          style={{ height: "490px", width: "95%", margin: "auto" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></TileLayer>

          {sucursales.map((sucursal) => (
            <Marker
              key={sucursal.key}
              position={sucursal.coordenadas}
              icon={myIcon}
            >
              <Popup>{sucursal.Popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <Row>
        <Col md={6}>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Misiones
            </div>
            <div>
              <strong>Dirección:</strong> Av Corrientes 35, Misiones, CP:
              C1043AAL
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Municipio de San Luis
            </div>
            <div>
              <strong>Dirección:</strong> Tomás Jofre 1350, Municipio de San
              Luis, CP: D5702JRP
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Santa Cruz
            </div>
            <div>
              <strong>Dirección:</strong> Río Gallegos 300, Santa Cruz, CP:
              E9400BLA
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Río Negro
            </div>
            <div>
              <strong>Dirección:</strong> Avenida Bustillo, 2, Río Negro, CP:
              8400
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Chubut
            </div>
            <div>
              <strong>Dirección:</strong> Puerto Madryn 250, Chubut, CP: U9120
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Mendoza
            </div>
            <div>
              <strong>Dirección:</strong> Pedro Molina Peltier 351, Mendoza, CP:
              U5500
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Entre Ríos
            </div>
            <div>
              <strong>Dirección:</strong> Urquiza Al Oeste P.10 Gualeguaycha,
              Entre Ríos, CP: E2820BLA
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> La Pampa
            </div>
            <div>
              <strong>Dirección:</strong> Santa Rosa 3000, La Pampa, CP: 6300
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Santiago del Estero
            </div>
            <div>
              <strong>Dirección:</strong> Quinzio 205, Santiago del Estero, CP:
              G4200
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Corrientes
            </div>
            <div>
              <strong>Dirección:</strong> Junín 1207, Corrientes, CP: 3400
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Tucumán
            </div>
            <div>
              <strong>Dirección:</strong> San Miguel de Tucumán 135, Tucumán,
              CP: T4000
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Neuquén
            </div>
            <div>
              <strong>Dirección:</strong> Gdor. Eduardo Elordi 80, Cutral Có,
              CP: 8322
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> La Rioja
            </div>
            <div>
              <strong>Dirección:</strong> San Nicolás de Bari 560, La Rioja, CP:
              F5300
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Catamarca
            </div>
            <div>
              <strong>Dirección:</strong> San Fernando del Valle de Catamarca 4,
              Catamarca, CP: 4700
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Salta
            </div>
            <div>
              <strong>Dirección:</strong> Leguizamón 1946, Salta, CP: 4400
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Chaco
            </div>
            <div>
              <strong>Dirección:</strong> Av Italia 455, Chaco, CP: H3500ALD
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Formosa
            </div>
            <div>
              <strong>Dirección:</strong> Jujuy 975, Formosa, CP: 3600
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Jujuy
            </div>
            <div>
              <strong>Dirección:</strong> San Salvador de Jujuy 330, Jujuy, CP:
              Y4600ABW
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Tierra del Fuego
            </div>
            <div>
              <strong>Dirección:</strong> Staiyakin 2676, Ushuaia, CP: 09410
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Buenos Aires
            </div>
            <div>
              <strong>Dirección:</strong> Av. 53 entre 1 y 2, Buenos Aires, CP:
              1900
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Córdoba
            </div>
            <div>
              <strong>Dirección:</strong> Rondeau 444, Córdoba, CP: X5000
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> San Juan
            </div>
            <div>
              <strong>Dirección:</strong> España 422 sur, San Juan, CP: D5400JRP
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div>
              <strong>Ciudad:</strong> Santa Fe
            </div>
            <div>
              <strong>Dirección:</strong> Mendoza 4170, Santa Fe, CP: S3000
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Mapa;
