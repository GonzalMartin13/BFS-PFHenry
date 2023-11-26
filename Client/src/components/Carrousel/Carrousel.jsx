import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const ArraySlider = [
    {
      Imagen: "https://i.imgur.com/agQUfTA.png",
      Nombre: "Flotas Modernas",
    },
    {
      Imagen: "https://noticiaslogisticaytransporte.com/wp-content/uploads/2015/11/entrega-paquetes-online.jpg",
      Nombre: "Bodegas Amplias",
    },
    {
      Imagen: "https://www.beetrack.com/hs-fs/hubfs/entrega%20de%20paquetes%20fedex.jpg?width=724&name=entrega%20de%20paquetes%20fedex.jpg",
      Nombre: "Hasta su hogar",
    },
    {
      Imagen: "https://thelogisticsworld.com/wp-content/uploads/2021/12/servicios-paqueteria.jpg",
      Nombre: "Retiro en Sucursal",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Carousel
        style={{
          width: "100%",
          height: "600px",
        }}
        data-bs-theme="dark"
      >
        {ArraySlider.map((Element, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundColor: "chocolate",
            }}
          >
            <img
              style={{
                padding: "40px 40px",
                width: "100%",
                height: "600px",
              }}
              src={Element.Imagen}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <h2>{Element.Nombre}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
