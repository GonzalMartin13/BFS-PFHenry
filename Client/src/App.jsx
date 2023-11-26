import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/redux/store/store";
import NavBar from "./components/NavBar/NavBar";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Home from "./components/Home/Home";
import About from "./views/About/About";
import Footer from "./components/Footer/Footer";
import CardContainer from "./components/CardContainer/CardContainer";
import Register from "./views/register/register";

import Mapa from "./components/Mapa/Mapa";
import Pdf from "./components/Pdf/Pdf";

import Email from "./components/Contact/Contact";
import Login from "./views/Login/Login";
import MisEnvios from "./components/misEnvios/misEnvios";

import "./App.css";
import Compra from "./components/Compra/Compra";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <NavBar />
      )}
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cotizacion" element={<QuoteForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Email />} />
          <Route path="/payment" element={<About />} />
          <Route path="/servicios" element={<CardContainer />} />
          <Route path="/sucursales" element={<Mapa />} />
          <Route path="/envios" element={<MisEnvios />} />
          <Route path="/register" element={<Register />} />
          <Route path="/guia" element={<Pdf />} />
          <Route path="/confirmacion" element={<Compra />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
