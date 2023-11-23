import { Route, Routes, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Home from "./components/Home/Home";
import About from "./views/About/About";
import Footer from "./components/Footer/Footer";
import FormContact from "./components/Contact/Contact";
import Login from "./views/Login/Login";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <NavBar />}

      {/* <Slider /> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/cotizacion" element={<QuoteForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<FormContact />} />
        <Route path="/payment" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
