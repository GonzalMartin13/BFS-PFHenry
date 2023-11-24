// import Carousel from "react-bootstrap/Carousel";


// const Slider = () => {
//   return (
//       <>
//           <Carousel>
//               <Carousel.Item interval={1000}>
//                   <img
//                       className="d-block w-50"
//                       src="https://thelogisticsworld.com/wp-content/uploads/2021/12/servicios-paqueteria.jpg"
//                       alt="First slide"
//                       style={{ height: '500px' }}
//                   />
//                   <Carousel.Caption>
//                       <h2 style={{ color: "black"}}>Nuestro equipo</h2>
//                       <h4 style={{ color: "black"}}>Se encarga del traslado de su paquete</h4>
//                   </Carousel.Caption>
//               </Carousel.Item>
             
//               <Carousel.Item>
//                   <img
//                       className="d-block w-50"
//                       src="https://blog.eiffmx.com/hs-fs/hubfs/shutterstock_573099904-1.jpg?width=1000&height=668&name=shutterstock_573099904-1.jpg"
//                       alt="Third slide"
//                       style={{ height: '500px' }}
//                   />
//                   <Carousel.Caption>
//                       <h2 style={{ color: "black"}}>Bodega</h2>
//                       <h4 style={{ color: "black"}}>Sus paquetes son manejado por personal calificado en nuestras sucursales</h4>
//                   </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//       </>
//   )
// }

// export default Slider;

import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={700}>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/agQUfTA.png"
            alt="First slide"
            style={{ height: '500px' }}
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Nuestro equipo</h2>

            <h4 style={{ color: "black" }}>Se encarga <br />del traslado <br />de su paquete</h4>

            <h4 style={{ color: "black" }}>Flota moderna y eficiente</h4>
          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item interval={1000}>
          <img
            className="d-block mx-auto w-50"
            src="https://noticiaslogisticaytransporte.com/wp-content/uploads/2015/11/entrega-paquetes-online.jpg"
            alt="Second slide"
            style={{ height: '500px' }}
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Nuestro equipo</h2>
            <h4 style={{ color: "black" }}>Se encarga del traslado de su paquete</h4>

          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item interval={1000}>
          <img
            className="d-block mx-auto w-50"
            src="https://www.beetrack.com/hs-fs/hubfs/entrega%20de%20paquetes%20fedex.jpg?width=724&name=entrega%20de%20paquetes%20fedex.jpg"
            alt="First slide"
            style={{ height: '500px' }}
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Hasta su hogar</h2>
            <h4 style={{ color: "black" }}>Reciba su paquete <br /> en la comodidad <br /> de su hogar</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block mx-auto w-50"
            src="https://thelogisticsworld.com/wp-content/uploads/2021/12/servicios-paqueteria.jpg"
            alt="First slide"
            style={{ height: '500px' }}
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Retiro</h2>
            <h4 style={{ color: "black" }}>Puede retirar su  <br />paquete en la <br />sucursal</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="https://blog.eiffmx.com/hs-fs/hubfs/shutterstock_573099904-1.jpg?width=1000&height=668&name=shutterstock_573099904-1.jpg"
            alt="Third slide"
            style={{ height: '500px' }}
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Bodega</h2>
            <h4 style={{ color: "black" }}>Sus paquetes <br />son manejados por <br />personal calificado <br /> en nuestras <br /> sucursales</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
