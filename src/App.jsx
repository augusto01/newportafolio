import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Content";
import Proyectos from "./components/Projects";
import Experiencia from "./components/Experiencia";
import Formacion from "./components/Formacion";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;