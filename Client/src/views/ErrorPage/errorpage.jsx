import { Link, useLocation } from "react-router-dom";
//import "./error.css"
// Reemplaza con la ruta correcta de tu imagen

const ErrorPage = () => {
  const query = useLocation();
  console.log(query.search);
  let hayquery = false;
  if (query.search) {
    hayquery = true;
  }

  return (
<<<<<<< HEAD
    <div >
      <img className="imgerror" src="../../../src/assets/conectores-hembra-vector-desenchufados-diseno-minimalista-404-bichos-sobre-fondo-blanco-tema-electrico-concepto-de-banner-web-corte-de-electricidad-perdida-de-conexion-vector-2ddpt5j.png" alt="error" />
=======
    <div>
      <img
        className="imgerror"
        src="../../../src/assets/conectores-hembra-vector-desenchufados-diseno-minimalista-404-bichos-sobre-fondo-blanco-tema-electrico-concepto-de-banner-web-corte-de-electricidad-perdida-de-conexion-vector-2ddpt5j.png"
        alt="error"
      />
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
      <h2 className="hache2">Error 404</h2>
      {hayquery ? (
        <h4>Hubo un problema en tu pago de mercadopago</h4>
      ) : (
        <>
          <h4>No pudimos encontrar la página que buscas,</h4>
          <h4>pero quédate tranquilo, tu envío está en camino</h4>
        </>
      )}
      <p>Aqui tiene algunos enlaces que capaz te sean de gran ayuda </p>
<<<<<<< HEAD
    <ul className="ul">
      <li><Link className="li" to="/">Pagina Principal</Link></li>
      <li><Link className="li" to="/servicios">Nuestros Servicios</Link></li>
      <li><Link className="li" to="/cotizacion">Cotizador de envios</Link></li>
      <li><Link className="li" to="/envios">Mis envios</Link></li>
      <li><Link className="li" to="/contacto">Contactate con Nosotros!</Link></li>
    </ul>
=======
      <ul className="ul">
        <li>
          <Link className="li" to="/">
            Pagina Principal
          </Link>
        </li>
        <li>
          <Link className="li" to="/servicios">
            Nuestros Servicios
          </Link>
        </li>
        <li>
          <Link className="li" to="/cotizacion">
            Cotizador de envios
          </Link>
        </li>
        <li>
          <Link className="li" to="/envios">
            Mis envios
          </Link>
        </li>
        <li>
          <Link className="li" to="/contacto">
            Contactate con Nosotros!
          </Link>
        </li>
      </ul>
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
    </div>
  );
};

export default ErrorPage;
