import SeguimientoEnvio from "../../components/seguimientoEnvio/seguimiento";
import Cards from "../Card/Cards";
import Slider from "../Carrousel/Carrousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import {getUserPackages} from "../../redux/actions/packageActions"
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const userPackages = useSelector((state) => state.packages.userPackages);
  const UserEmail = useSelector((state) => state.user.user.email);
  const isLogged = useSelector((state)=>state.user.isLoggedIn)
  const [linkpago, setLinkpago] = useState("")
 
  console.log(UserEmail)
  console.log(userPackages)

 
useEffect(() => {
  if (UserEmail) {
    dispatch(getUserPackages(UserEmail))
  }
  let total = 2500
  let servicios = "discreto"
  const {data} = axios.post("http://localhost:3001/pagos/crear", ({total, servicios}))
  setLinkpago(data)
}, []);




  return (
    <div style={{ position: 'relative' }}>


    <div>
       <button> Holaaa</button>
    </div>
    <a href={linkpago}>12346</a>
    
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
      <h3 className="title-carousel margin center-items">
        ¡Conoce <b>nuestros servicios</b> adaptados a nuestros clientes!
      </h3>
      <Cards />

       <Button href="/envios" variant=""/>


      <br />

      <Button  href={isLogged ? "/envios" : "/login"} variant="">

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
