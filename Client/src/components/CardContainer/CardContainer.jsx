// import Card1 from "../Card/Card";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../CardContainer/cardContainer.module.css"

const CardContainer = () => {
  return (
    <div className={styles.divCard}>
      <div >
        <Card style={{ width: "18rem", height: "30rem", margin: "10px"}}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/z/motorcycle-delivery-box-isolated-white-background-d-render-58251633.jpg?w=768"
          />
          <Card.Body>
            <Card.Title>Servicio Express</Card.Title>
            <Card.Text>
              Servicio Express Hasta 15 kg | 40x40x40 cm Paquetes urgentes que requieren entrega express
            </Card.Text>
            <Button variant="primary">Cotizar mi envio</Button>
          </Card.Body>
        </Card>
      </div>
      <div >
        <Card style={{ width: "18rem", height: "30rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://fotos.perfil.com/2018/05/01/5-nuevo-renault-kangoo-pasajeros-zen-2.jpg"
          />
          <Card.Body>
            <Card.Title>Servicio Regular</Card.Title>
            <Card.Text>
              Servicio Regular Hasta 60 kg | 80x85x40 cm Requieres la entrega en
              el menor tiempo posible, para paquetes grandes, esta es tu opcion
            </Card.Text>
            <Button variant="primary">Cotizar mi envio</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem", height: "30rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/fotos-premium/camioneta-carga-moderna-logistica-rapida-conveniente-dentro-ciudad_124507-54626.jpg?w=996"
          />
          <Card.Body>
            <Card.Title>Gran volumen</Card.Title>
            <Card.Text>
            Servicio por volumen Hasta 800 kg | 330x145x140 cm Paquetes de grandes dimenciones, sin problema lo entregamos
            </Card.Text>
            <Button variant="primary">Cotizar mi envio</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem", height: "30rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://embalia.com/wp-content/uploads/2022/04/embalaje-de-productos-fragiles.jpg"
          />
          <Card.Body>
            <Card.Title>Servicio delicado</Card.Title>
            <Card.Text>
            Servicio delicado Hasta 60 kg | 80x85x40 cm Sabemos lo importante de tus envios y lo manejaremos con extremo cuidado
            </Card.Text>
            <Button variant="primary">Cotizar mi envio</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

    // <div>
    //   <Card></Card>
    // </div>
  );
};

export default CardContainer;
