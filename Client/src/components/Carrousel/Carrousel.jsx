import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div className="text-center mx-auto" style={{ width: '40%', height: "40%" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/004/688/626/non_2x/a-courier-man-delivers-packages-to-the-recipient-s-home-daily-of-a-postman-as-delivery-service-worker-delivering-packages-to-the-recipient-free-photo.jpg"
            alt="First slide"
            style={{ height: '400px' }}
          />
          <Carousel.Caption>
            <h5>Nuestros clientes</h5>
            <h6>Son la clave de nuestro exito</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://noticiaslogisticaytransporte.com/wp-content/uploads/2015/11/entrega-paquetes-online.jpg"
            alt="Second slide"
            style={{ height: '400px' }}
          />
          <Carousel.Caption>
            <h5>Atencion</h5>
            <h6>Los 365 dias del año</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.eltiempo.com/files/image_640_428/uploads/2018/04/24/5adf56453d3ce.jpeg"
            alt="Tercer slide"
            style={{ height: '400px' }}
          />
          <Carousel.Caption>
            <h5>Servicio Express</h5>
            <p>
              Entregamos su pedido en tiempo record
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
