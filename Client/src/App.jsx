/* eslint-disable no-unused-vars */
import { Route, Routes, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./views/About/About";
import Dashboard from "./views/Dashboard/Dashboard"
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
/* import Compra from "./components/Compra/Compra";
import ComprobantePDF from "./components/Compra/ComprobantePDF"; */
import FormEnvio from "./components/FormEnvio/FormEnvio";

function App() {
  const location = useLocation();
  const {admin} = useSelector((state) => state.user)
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
        <Route path="/dashboard" element={admin.emailAdmin && <Dashboard updateContextUser={updateContextUser} />} />
        <Route path="/factura" element={<Comprobante />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
