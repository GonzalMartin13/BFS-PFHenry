import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../CardContainer/cardContainer.module.css"

const Cards = () => {
  return (
    <div className={styles.divCard}>
      <div>
        <Card style={{ width: "18rem", height: "25rem", margin: "10px", backgroundColor: "#ffbc6587" }}>
          <Card.Img
            variant="top"
            src="https://libertyexpress.com/wp-content/themes/kutis/assets/svg/icons/servicioPickup.svg"
            style={{ width: '100px', height: '100px', }}
          />
          <Card.Body>
            <Card.Title>SERVICIO DE RECOGIDAS O PICKUP</Card.Title>
            <Card.Text>
            Ideal para mandar a buscar lo que desees en cualquier provincia
            </Card.Text>
            <Button variant="primary" href="/contacto">Contactanos</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem", height: "25rem", margin: "10px", backgroundColor: "#0000ff44" }}>
          <Card.Img
            variant="top"
            src="https://libertyexpress.com/wp-content/themes/kutis/assets/svg/icons/servicioCargaComercial.svg"
            style={{ width: '100px', height: '100px' }}
          />
          <Card.Body>
            <Card.Title>CARGA COMERCIAL Y PERSONAL</Card.Title>
            <Card.Text>
            Ideal para empresas con alto volumen y personas que requieran de un servicio especializado
            </Card.Text>
            <Button variant="primary" href="/cotizacion">Cotizar mi envio</Button>
          </Card.Body>
        </Card>
      </div>
 
      <div>
        <Card style={{ width: "18rem", height: "25rem", margin: "10px", backgroundColor: "#ffbc6587" }}>
          <Card.Img
            variant="top"
            src="https://libertyexpress.com/wp-content/themes/kutis/assets/svg/icons/servicioEnvioRecepcion.svg"
            style={{ width: '100px', height: '100px' }}
          />
          <Card.Body>
            <Card.Title>RETIRA EN NUESTRAS SUCURSALES</Card.Title>
            <Card.Text>
            Retira tus paquetes en la sucursal que este más cercana a tu domicilio
            </Card.Text>
            <Button variant="primary" href="/sucursales">Consulta</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
