/* eslint-disable react/jsx-key */
import Carousel from "react-bootstrap/Carousel";
import paquetes from "../../assets/paquete.png";
import repartidora from "../../assets/repartidora.png";
import './carrouserStyles.scss';

const Slider = () => {
  const ArrayDeImagenes = [
    {
      Imagen: repartidora,
      Titulo: "Nuestro equipo",
      Descripcion: "Flota moderna y eficiente",
    },
    {
      Imagen: "https://i.imgur.com/agQUfTA.png",
      Titulo: "Nuestro equipo",
      Descripcion: "Se encarga del traslado de su  paquete",
    },
    {
      Imagen: "https://www.beetrack.com/hs-fs/hubfs/entrega%20de%20paquetes%20fedex.jpg?width=724&name=entrega%20de%20paquetes%20fedex.jpg",
      Titulo: "Hasta su hogar",
      Descripcion: "Reciba su paquete en la comodidad de su hogar",
    },
    {
      Imagen: "https://thelogisticsworld.com/wp-content/uploads/2021/12/servicios-paqueteria.jpg",
      Titulo: "Retiro",
      Descripcion: "Puede retirar su paquete en la sucursal",
    },
    {
      Imagen: paquetes,
      Titulo: "Bodega",
      Descripcion: " Sus paquetes son manejados por personal calificado en nuestras sucursales",
    },
  ];

  return (
    <div className="CarruselContainer"> {/* Contenedor para centrar el carrusel */}
      <Carousel data-bs-theme="dark" className="Carrusel"> {/* Utiliza la clase correcta */}
        {ArrayDeImagenes.map((Element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 ImagenCarrusel"
              src={Element.Imagen}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className="custom-caption">
              <h2>Nuestro equipo</h2>
              <h4>Flota moderna <br /> y eficiente</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
