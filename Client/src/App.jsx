import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Home from "./components/Home/Home";
import About from "./views/About/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exat path="/home" element={<Home />} />
        <Route path="/cotizacion" element={<QuoteForm />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={FORMULARIO DE CONTACTO} /> */}
        <Route path="/payment" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
