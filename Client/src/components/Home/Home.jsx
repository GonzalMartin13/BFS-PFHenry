/* eslint-disable react-hooks/exhaustive-deps */
import SeguimientoEnvio from "../../components/seguimientoEnvio/seguimiento";
import Cards from "../Card/Cards";
import Slider from "../Carrousel/Carrousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  
  const isLogged = useSelector((state) => state.user.isLoggedIn);

  return (
    <div style={{ position: "relative" }}>
      <Image
        src="https://selfpackaging.es/blog/wp-content/uploads/2019/03/entrega-paquete-1.jpg"
        fluid
        style={{ width: "100%", height: "600px" }}
      />
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <SeguimientoEnvio />
      </div>
      <br />
      <br />
      <h2 className="title-carousel margin center-items">
        ¡Tenemos un <b>gran compromiso</b>!
      </h2>
      <Slider />
      <br />
      <h3 className="title-carousel margin center-items">
        ¡Conoce <b>nuestros servicios</b> adaptados a nuestros clientes!
      </h3>
      <Cards />

      <Button href="/envios" variant="" />

      <br />

      <Button href={isLogged ? "/envios" : "/login"} variant="">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Ver mis envíos</Card.Title>
            <Card.Text>
              Mirá el listado de envíos asociados a tu cuenta.
            </Card.Text>
          </Card.Body>
        </Card>
      </Button>

   
    </div>
  );
};

export default Home;
