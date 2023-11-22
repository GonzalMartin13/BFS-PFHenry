import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Home from "./components/Home/Home";
import About from "./views/About/About";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Carrousel/Carrousel";


import FormContact from "./components/Contact/Contact";

import "./App.css";


function App() {
  return (
    <>
      <NavBar />
      <Slider/> 
      <Routes>
        <Route exat path="/home" element={<Home />} />
        <Route path="/cotizacion" element={<QuoteForm />} />
        <Route path="/about" element={<About />} />


        <Route path="/contacto" element={<FormContact/>} />

        <Route path="/payment" element={<About />} />
      </Routes>
    <Footer/>  
    </>
  );
}

export default App;
