import { Route, Routes, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./views/About/About";
import Dashboard from "./views/Dashboard/Dashboard"
import Footer from "./components/Footer/Footer";
import CardContainer from "./components/CardContainer/CardContainer";
import Register from "./views/register/register";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Comprobante from "./components/Compra/Comprobante";
import Mapa from "./components/Mapa/Mapa";
import Pdf from "./components/Pdf/Pdf";
import { useState } from "react";

import Email from "./components/Contact/Contact";
import MisEnvios from "./components/misEnvios/misEnvios";

import "./App.css";
/* import Compra from "./components/Compra/Compra";
import ComprobantePDF from "./components/Compra/ComprobantePDF"; */
import FormEnvio from "./components/FormEnvio/FormEnvio";
import ErrorPage from "./views/ErrorPage/errorpage";

function App() {
  const location = useLocation();
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

      {location.pathname !== "*" && (
        <NavBar/>)}
        
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cotizacion" element={<QuoteForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Email />} />
        <Route path="/payment" element={<About />} />
        <Route path="/servicios" element={<CardContainer />} />
        <Route path="/sucursales" element={<Mapa />} />
        <Route path="/envios" element={<MisEnvios />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guia" element={<Pdf />} />
        <Route path="/confirmacion" element={<FormEnvio />} />
        <Route path="/dashboard" element={<Dashboard updateContextUser={updateContextUser} />} />
        <Route path="/factura" element={<Comprobante />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
