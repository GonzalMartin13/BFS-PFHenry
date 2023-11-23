import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://thelogisticsworld.com/wp-content/uploads/2021/12/servicios-paqueteria.jpg"
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Nuestro equipo</h2>
            <h4 style={{ color: "black" }}>
              Se encarga del traslado de su paquete
            </h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.eiffmx.com/hs-fs/hubfs/shutterstock_573099904-1.jpg?width=1000&height=668&name=shutterstock_573099904-1.jpg"
            alt="Third slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Bodega</h2>
            <h4 style={{ color: "black" }}>
              Sus paquetes son manejado por personal calificado en nuestras
              sucursales
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
