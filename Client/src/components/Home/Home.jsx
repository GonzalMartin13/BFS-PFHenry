import SeguimientoEnvio from "../../components/seguimientoEnvio/seguimiento";
import Image from 'react-bootstrap/Image';
import Slider from "../Carrousel/Carrousel";

const Home = () => {
  return (
    <div>
      <Image className="w-100" src="https://selfpackaging.es/blog/wp-content/uploads/2019/03/entrega-paquete-1.jpg" fluid style={{ height: '600px' }} 
      />

      <br />
      <br />
      <h2>¡Tenemos un <b>gran compromiso</b>!</h2>
      <Slider/> 
     <SeguimientoEnvio />
    </div>
  );
};

export default Home;
