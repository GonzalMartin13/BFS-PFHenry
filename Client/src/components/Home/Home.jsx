import SeguimientoEnvio from "../../components/seguimientoEnvio/seguimiento";
import Cards from "../Card/Cards";
import Slider from "../Carrousel/Carrousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (

    <div style={{ position: 'relative' }}>
      <Image src="https://selfpackaging.es/blog/wp-content/uploads/2019/03/entrega-paquete-1.jpg" fluid style={{ width: '100%', height: '600px' }}/>
      <div style={{ position: 'absolute', top: 50, left: 0, width: '100%', height: '100%' }}>

        <SeguimientoEnvio />
      </div>
      <br />
      <br />
      <h2 className="title-carousel margin center-items">
        ¡Tenemos un <b>gran compromiso</b>!
      </h2>
      <Slider />
      <br />
      <br />

      <h3 className="title-carousel margin center-items">
        ¡Conoce <b>nuestros servicios</b> adaptados a nuestros clientes!
      </h3>
      <br />
      <Cards />

      <br />
      <Button href="/envios" variant="">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Ver mis envíos</Card.Title>
            <Card.Text>
              Mirá el listado de envíos asociados a tu cuenta.
            </Card.Text>
          </Card.Body>
        </Card>
      </Button>

      <Button href="/sucursales" variant="">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Buscar sucursal</Card.Title>
            <Card.Text>Encontrá la sucursal BFS más cercana.</Card.Text>
          </Card.Body>
        </Card>
      </Button>
    </div>
  );
};

export default Home;
