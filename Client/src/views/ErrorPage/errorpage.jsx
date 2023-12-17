import { Link, useLocation } from "react-router-dom";
import style from "./error.module.css"
// Reemplaza con la ruta correcta de tu imagen

const ErrorPage = () => {
  const query = useLocation();
  console.log(query.search);
  let hayquery = false;
  if (query.search) {
    hayquery = true;
  }

  return (
    <div>
      <img
        className={style.imgerror}
        src="https://i.pcmag.com/imagery/articles/04jAUMmQpJDt3aEZAQgEowt-2.fit_lim.v1623151030.jpg"
        alt="error"
      />
      <h2 className={style.hache2}>Error 404</h2>
      {hayquery ? (
        <h4>Hubo un problema en tu pago de mercadopago</h4>
      ) : (
        <>
          <h4>No pudimos encontrar la página que buscas,</h4>
          <h4>pero quédate tranquilo, tu envío está en camino</h4>
        </>
      )}
      <p>Aqui tiene algunos enlaces que capaz te sean de gran ayuda </p>
      <ul className={style.ul}>
        <li>
          <Link className={style.li} to="/">
            Pagina Principal
          </Link>
        </li>
        <li>
          <Link className={style.li} to="/servicios">
            Nuestros Servicios
          </Link>
        </li>
        <li>
          <Link className={style.li} to="/cotizacion">
            Cotizador de envios
          </Link>
        </li>
        <li>
          <Link className={style.li} to="/envios">
            Mis envios
          </Link>
        </li>
        <li>
          <Link className={style.li} to="/contacto">
            Contactate con Nosotros!
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
