/* eslint-disable react-hooks/exhaustive-deps */
import Cards from "../Card/Cards";
import Slider from "../Carrousel/Carrousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useSelector } from "react-redux";
import iconoEnvio from "../../assets/envio.svg"
import Reviews from "../Reviews/reviews";


const Home = () => {
  const isLogged = useSelector((state) => state.user.isLoggedIn);

  return (
    <div style={{ position: "relative" }}>
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
            <br></br>
            <img src={iconoEnvio}/>
            <Card.Text>
              Mirá el listado de envíos asociados a tu cuenta.
            </Card.Text>
          </Card.Body>
        </Card>
      </Button>
<br/>
<br/>
<br/>

      <Reviews/>
<br/>

   
    </div>
  );
};

export default Home;
