import Carousel from "react-bootstrap/Carousel";
import {image, font, background} from "./style";
import paquetes from "../../assets/paquete.png"
import repartidora from "../../assets/repartidora.png"
import camion from "../../assets/camion.png"

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/agQUfTA.png"
            alt="First slide"
            style={image}
          />
          <Carousel.Caption style={background}>
            <h2 style={font}>Nuestro equipo</h2>

            <h4 style={font}>
              Flota moderna <br /> y eficiente
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src={repartidora}
            alt="Second slide"
            style={image}
          />
          <Carousel.Caption style={background}>
            <h2 style={font}>Nuestro equipo</h2>
            <h4 style={font}>
              Se encarga del <br />
              traslado de su <br /> paquete
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-5"
            src="https://www.beetrack.com/hs-fs/hubfs/entrega%20de%20paquetes%20fedex.jpg?width=724&name=entrega%20de%20paquetes%20fedex.jpg"
            alt="First slide"
            style={image}
          />
          <Carousel.Caption style={background}>
            <h2 style={font}>Hasta su hogar</h2>
            <h4 style={font}>
              Reciba su paquete <br /> en la comodidad <br /> de su hogar
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="https://thelogisticsworld.com/wp-content/uploads/2021/12/servicios-paqueteria.jpg"
            alt="First slide"
            style={image}
          />
          <Carousel.Caption style={background}>
            <h2 style={font}>Retiro</h2>
            <h4 style={font}>
              Puede retirar su <br />
              paquete en la <br />
              sucursal
            </h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src={paquetes}
            alt="Third slide"
            style={image}
          />
          <Carousel.Caption style={background}>
            <h2 style={font}>Bodega</h2>
            <h4 style={font}>
              Sus paquetes <br />
              son manejados por <br />
              personal calificado <br /> en nuestras <br /> sucursales
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
