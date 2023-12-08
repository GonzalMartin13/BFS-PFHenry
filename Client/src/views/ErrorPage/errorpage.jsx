import { Link } from "react-router-dom";
import "./error.css"
 // Reemplaza con la ruta correcta de tu imagen

const ErrorPage = () => {
  return (
    <div >
      <img src="../../../src/assets/conectores-hembra-vector-desenchufados-diseno-minimalista-404-bichos-sobre-fondo-blanco-tema-electrico-concepto-de-banner-web-corte-de-electricidad-perdida-de-conexion-vector-2ddpt5j.png" alt="error" />
      <h2>Error 404</h2>
      <h4>No pudimos encontrar la pagina que buscas,</h4>
      <h4>pero quedate tranquilo, tu envio esta en camino</h4>
      <p>Aqui tiene algunos enlaces que capaz te sean de gran ayuda </p>
    <ul>
      <li><Link className="li" to="/">Pagina Principal</Link></li>
      <li><Link className="li" to="/servicios">Nuestros Servicios</Link></li>
      <li><Link className="li" to="/cotizacion">Cotizador de envios</Link></li>
      <li><Link className="li" to="/envios">Mis envios</Link></li>
      <li><Link className="li" to="/contacto">Contactate con Nosotros!</Link></li>
    </ul>
    </div>
  );
};

export default ErrorPage;
