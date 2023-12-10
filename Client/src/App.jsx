//import React from "react";
/* eslint-disable no-unused-vars */
/* import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./views/About/About";
import Dashboard from "./views/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import CardContainer from "./components/CardContainer/CardContainer";
import Profile from "./views/Profile/Profile";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Comprobante from "./components/Compra/Comprobante";
import Mapa from "./components/Mapa/Mapa";
import Pdf from "./components/Pdf/Pdf";
import { useState } from "react";
import { useSelector } from "react-redux";

import Email from "./components/Contact/Contact";
import MisEnvios from "./components/misEnvios/misEnvios";

import "./App.css";

import FormEnvio from "./components/FormEnvio/FormEnvio";
import ErrorPage from "./views/ErrorPage/errorpage";
import Reviews from "./components/Reviews/reviews";
import ShowReviews from "./views/showReviews/showreviews";

function App() {
  const location = useLocation();
  const { isLoggedIn, admin, isProfile } = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.user.user);
  console.log("el perfil", isProfile);
  const { name, lastName, phone } = currentUser;

  const { origen, destino, servicios, total } = useSelector(
    (state) => state.quoter
  );
  const quoteState =
    origen != "" && destino != "" && servicios.length > 0 && total != "";
  const envio = useSelector((state) => state.shipping);
  const todosVacios = Object.values(envio).every(
    (valor) => valor === "" || (Array.isArray(valor) && valor.length === 0)
  );
  console.log(todosVacios);
  const [user, setUser] = useState({
    email: "",
    password: "",
    isNew: null,
    enabled: false,
  });
  console.log("el cotizador tiene datos", quoteState);
  const updateContextUser = (newUser) => {
    setUser(newUser);
  };

  const validRoutes = [
    "/",
    "/cotizacion",
    "/about",
    "/contacto",
    "/payment",
    "/servicios",
    "/sucursales",
    "/envios",
    "/profile",
    "/guia",
    "/confirmacion",
    "/dashboard",
    "/factura",
    "/reviews",
  ];

  const showNavBar = validRoutes.includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cotizacion" element={<QuoteForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Email />} />
        <Route path="/payment" element={<About />} />
        <Route path="/servicios" element={<CardContainer />} />
        <Route path="/sucursales" element={<Mapa />} />
        <Route path="/guia" element={<Pdf />} />
        <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
        <Route path="*" element={<ErrorPage />} /> */
        {/* //protege ruta /factura redirige a "/" si datos de compra estan vacios */}
{/*         <Route
          element={<ProtectedRoute isAllowed={isLoggedIn && !todosVacios} />}
        >
=======
        <Route path="*" element={<ErrorPage />} />
        {/* //protege ruta "/factura" redirige a "/" si datos de compra estan vacios */}
        <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
          <Route path="/factura" element={<Comprobante />} />
        </Route> */}

<<<<<<< HEAD
        {/* //Redirige a "/profile" para obligar al usuario a completar datos de
        perfil */}
{/*         <Route
          element={
            <ProtectedRoute
              isAllowed={isLoggedIn && name && lastName & address && phone}
              redirectTo={"/profile"}
            />
          }
=======
        {/* para ingresar a "/envios" el usuario debe estar logueado*/}
        <Route
          element={<ProtectedRoute isAllowed={isLoggedIn} redirectTo={"/"} />}
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
        >
          <Route path="/envios" element={<MisEnvios />} /> */}

<<<<<<< HEAD
         {/*  //si estado quote esta vacio no permite ingresar a ruta /confirmacion,
          quizas haya que modificar todo esto... */}
{/*         </Route>
        {isLoggedIn ? (
          <Route
            element={
              <ProtectedRoute
                isAllowed={
                  name &&
                  lastName & address &&
                  phone &&
                  origen != "" &&
                  destino != "" &&
                  total != "" &&
                  servicios.length != 0
                }
                redirectTo="/profile"
              />
            }
          >
            <Route path="/confirmacion" element={<FormEnvio />} />
          </Route>
        ) : (
          <Route
            path="/confirmacion"
            element={<ProtectedRoute isAllowed={false} />}
          />
        )} */}
       {/*  //verifica que admin.email y isLoggedIn sean true para ir a ruta
=======
          {/*  //para navegar a "/confirmacion" el usuario debe estar logueado, tienen que existir los datos de perfil y tienen que existir la informacion del cotizador */}
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAllowed={isLoggedIn && isProfile && quoteState}
              redirectTo="/"
            />
          }
        >
          <Route path="/confirmacion" element={<FormEnvio />} />
        </Route>

        {/*  //verifica que admin.email y isLoggedIn sean true para ir a ruta
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
        "/dashboard", caso que de false redirige a "/" */}
 {/*        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAllowed={isLoggedIn && admin.emailAdmin}>
              <Dashboard updateContextUser={updateContextUser} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App; */}

//-------------------- ❌ ❌ No borrar lo de abajo❌❌-------------------------
//----usar en caso de tener que trabajar con componentes de rutas protegidas 👍
//-------------------- ❌ ❌ No borrar lo de abajo❌❌-------------------------
//----usar en caso de tener que trabajar con componentes de rutas protegidas 👍
//-------------------- ❌ ❌ No borrar lo de abajo❌❌-------------------------
//----usar en caso de tener que trabajar con componentes de rutas protegidas 👍
//-------------------- ❌ ❌ No borrar lo de abajo❌❌-------------------------
//----usar en caso de tener que trabajar con componentes de rutas protegidas 👍

///////////////////////////////////////////////////////////////////////////////////////
 import { Route, Routes, useLocation } from "react-router-dom";
 import ErrorPage from "./views/ErrorPage/errorpage";
 import NavBar from "./components/NavBar/NavBar";
 import Home from "./components/Home/Home";
 import About from "./views/About/About";
 import Dashboard from "./views/Dashboard/Dashboard";
 import Footer from "./components/Footer/Footer";
 import CardContainer from "./components/CardContainer/CardContainer";
 import Profile from "./views/Profile/Profile";
 import QuoteForm from "./components/QuoteForm/QuoteForm";
 import Comprobante from "./components/Compra/Comprobante";
 import Mapa from "./components/Mapa/Mapa";
 import Pdf from "./components/Pdf/Pdf";
 import { useState } from "react";
 import { useSelector } from "react-redux";
 import MisEnvios from "./components/misEnvios/misEnvios";
 import Email from "./components/Contact/Contact";
// import MisEnvios from "./components/misEnvios/misEnvios";
 import "./App.css";
 /* import Compra from "./components/Compra/Compra";
 import ComprobantePDF from "./components/Compra/ComprobantePDF"; */
 import FormEnvio from "./components/FormEnvio/FormEnvio";
 function App() {
   const location = useLocation();
   const { admin } = useSelector((state) => state.user);
   const [user, setUser] = useState({
     email: "",
     password: "",
     isNew: null,
     enabled: false,
   });
   const updateContextUser = (newUser) => {
   setUser(newUser);
 };
 return (
   <>
     {location.pathname !== "/register" && <NavBar />}
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/cotizacion" element={<QuoteForm />} />
       <Route path="/about" element={<About />} />
       <Route path="/contacto" element={<Email />} />
       <Route path="/payment" element={<About />} />
       <Route path="/servicios" element={<CardContainer />} />
       <Route path="/sucursales" element={<Mapa />} />
       <Route path="/envios" element={<MisEnvios />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/guia" element={<Pdf />} />
       <Route path="/confirmacion" element={<FormEnvio />} />
       <Route
           path="/dashboard"
           element={
             admin.emailAdmin && (
               <Dashboard updateContextUser={updateContextUser} />
             )
           }
         />
         <Route path="/factura" element={<Comprobante />} />
         <Route path="*" element={<ErrorPage />} />
       </Routes>
       <Footer />
     </>
   );
 }

<<<<<<< HEAD
 export default App;
=======
// import "./App.css";
// /* import Compra from "./components/Compra/Compra";
// import ComprobantePDF from "./components/Compra/ComprobantePDF"; */
// import FormEnvio from "./components/FormEnvio/FormEnvio";

// function App() {
//   const location = useLocation();
//   const { admin } = useSelector((state) => state.user);
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     isNew: null,
//     enabled: false,
//   });

//   const updateContextUser = (newUser) => {
//     setUser(newUser);
//   };

//   return (
//     <>
//       {location.pathname !== "/register" && <NavBar />}

//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/cotizacion" element={<QuoteForm />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contacto" element={<Email />} />
//         <Route path="/payment" element={<About />} />
//         <Route path="/servicios" element={<CardContainer />} />
//         <Route path="/sucursales" element={<Mapa />} />
//         <Route path="/envios" element={<MisEnvios />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/guia" element={<Pdf />} />
//         <Route path="/confirmacion" element={<FormEnvio />} />
//         <Route
//           path="/dashboard"
//           element={
//             admin.emailAdmin && (
//               <Dashboard updateContextUser={updateContextUser} />
//             )
//           }
//         />
//         <Route path="/factura" element={<Comprobante />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
