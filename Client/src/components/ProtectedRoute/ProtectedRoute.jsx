import React from "react";

import { Navigate, Outlet } from "react-router-dom";
//isAllowed es la condicion que tiene que dar true para que renderice la ruta
//children es el el componente que esta envuelto por ProtectedRoute (solo un componente anidado).
//en caso que no sea un solo componente sino varias rutas las protegidas a la vez por la misma etiqueta <ProtectedRoute/> se usa <Outlet/> que es un componente de react-router-dom y sirve para anidar rutas.
//redirectTo es la ruta a la que queremos que redirija, esta por defecto "/", pero se puede manipular pasando la ruta por props.
//<Navigate/> es un componente de react-router-dom y sirve para "navegar" 😄
function ProtectedRoute({ isAllowed, children, redirectTo = "/" }) {
  if (!isAllowed) return <Navigate to={redirectTo} />;
  return children ? children : <Outlet />; //si es uno solo el componente anidado children da true, si children da false retorna <Outlet/> (varios componentes anidados)
}

export default ProtectedRoute;
