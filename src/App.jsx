import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Content";
import Proyectos from "./components/Projects";
import Experiencia from "./components/Experiencia";
import Formacion from "./components/Formacion";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Login from "./components/Login";

// Importar el nuevo Layout (lo crearemos abajo)
import AdminLayout from "./components/layouts/AdminLayout"; 

const AppRoutes = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* --- RUTAS PÚBLICAS --- */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Proyectos />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* --- RUTAS DE ADMINISTRACIÓN (PROTEGIDAS) --- */}
          {/* El AdminLayout envuelve estas rutas */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* Si entras a /admin, te redirige a dashboard */}
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<div>Bienvenido al Dashboard</div>} />
            <Route path="edit-projects" element={<div>Gestión de Proyectos</div>} />
            <Route path="edit-experience" element={<div>Gestión de Experiencia</div>} />
          </Route>

          {/* --- 404 --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;